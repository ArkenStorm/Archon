Discord = require('discord.js');
Client = new Discord.Client();

class ShockwaveClient extends Client {
    constructor() {
        super();
        this.commands = {
            '!test': {
                description: 'Test command',
                usage: '!test',
                category: 'Test',
                execute: (message) => {
                    message.channel.send('Test message');
                }
            }
        };
    }
}

module.exports = ShockwaveClient;