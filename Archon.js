const Discord = require('discord.js'),
Client = Discord.Client;
Intents = Discord.Intents;

class ArchonClient extends Client {
    constructor(options) {
        // default Client options
        if (!options) {
            options = {
                partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
                // Default intents, possibly add voice state stuff later if music bot stuff happens?
                intents: new Intents([Intents.FLAGS.GUILD_MESSAGES,
                                    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                                    Intents.FLAGS.GUILD_MESSAGE_TYPING,
                                    Intents.FLAGS.DIRECT_MESSAGES,
                                    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                                    Intents.FLAGS.DIRECT_MESSAGE_TYPING])
            };
        }
        super(options);

        // Set up Discord event listeners
        this.on('ready', () => {
            console.log(`Connected as ${this.user.tag}`);
            // initialize any databases here
        });

        this.on('error', err => {
            console.error(`Encountered an error establishing a connection to Discord, restarting...\nError: ${err}`);
            setTimeout(() => process.exit(1), 10000);
        });

        this.on('message', async msg => {
            // basic command parsing
        });
    }
}

module.exports = ArchonClient;