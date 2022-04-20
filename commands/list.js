module.exports = {
    name: "list", 
    description: "List over bot commands",
    execute(message, args) {
        message.channel.send(`
        Dette er mine kommandoer

**prefix** = ! 
**!help** =
**!skjermproblemer** - hvis du har problemer med skjermen
**!ping** - sender pong tilbake
**!meme** - sender en random meme
        `);
    }
}