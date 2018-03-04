const environments = {
    development: 'development',
    production: 'production'
};

const cfg = {
	discordToken: 'NDE5OTY3MTYwNzc4MDk2NjQw.DX35SQ.ZriWBW2TG7s7_bET1sgxuOrLZPQ',
    graphcoolId: 'cjeda32ys1lt6012759cb896v',
    graphcoolToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjAxOTk0OTcsImNsaWVudElkIjoiY2plZGEzMnlzMWx0NzAxMjdqY2NvaXhiZCJ9.SUaaUvhLuECbJBKi9kqXYmZ9lKSpnXgbpY_B3DHA3oQ',
    environment: environments.production,
    server: {
        development: 'test',
        production: 'Feven lair'
    },
    cmdChannels: {
        development: ['inhouse'],
        production: ['inhouse']
    },
    trueskill: {
        amateur: {
            initialRating: 1500,
            initialSigma: 1.813 * 2
        },
        pro: {
            initialRating: 2500,
            initialSigma: 1.813
        }
    },
    admins: ['175030777875136513', '310804323900719104', '220319923451330561']
};

export default cfg;
