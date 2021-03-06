import enforceWordCount from '../utls/enforceWordCount';
import getWord from '../utls/getWord';
import { createPlayerQuery } from '../queries';
import cfg from '../../config';

function Player(discordId, username, rating, sigma) {
    this.discordId = discordId;
    this.username = username;
    this.rating = rating;
    this.sigma = sigma;
}

/**
 * Removes certain query-dangerous characters from usernames
 * @param {*} username
 */
function sanitize(username) {
    return username
        .split(' ')
        .join('')
        .split('"')
        .join('')
        .split("'")
        .join('')
        .split('\\')
        .join('');
}

/**
 * Command to register a new player to the database
 * Syntax: !register <username>
 */
async function register(msg) {
    const userMessage = msg.content;
    if (userMessage.startsWith('!register')) {
        //const username = sanitize(getWord(userMessage, 2));

        // Error - username too long
        /*if (username.length > 25) {
            return {
                responseMessage: `Error: ${username} is too long (keep under 25 characters)`,
                deleteSenderMessage: false
            };
        }*/
        const userID = msg.author.id;
        const discordUsername = msg.author.username;
        const newPlayer = new Player(
            userID,
            discordUsername,
            cfg.trueskill.amateur.initialRating,
            cfg.trueskill.amateur.initialSigma
        );
        try {
            await createPlayerQuery(newPlayer);
        } catch (err) {
            const errStr = err.message.toString();
            if (errStr.includes('Field name = discordId')) {
                return {
                    responseMessage: `Error: ${userID} has already been registered.`,
                    deleteSenderMessage: false
                };
            }
            if (errStr.includes('Field name = username')) {
                return {
                    responseMessage: `Error: username ${discordUsername} has already been registered.`,
                    deleteSenderMessage: false
                };
            }
        }

        // Successful
        return {
            responseMessage: `${userID} has been successfully registered as ${discordUsername}.`,
            deleteSenderMessage: false
        };
    }

    // Resolve promise
    return false;
}

export default register;
