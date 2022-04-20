//jshint esversion:6
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({ intents: [
"GUILDS", 
"GUILD_MESSAGES", 
"DIRECT_MESSAGES"
] });

const prefix = "!";

const fs = require("fs");

// disc collection for kommandoer
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();


    // hvis discord bruker skriver ping sender botten pong tilbake
    if (command === "ping") {
        client.commands.get("ping").execute(message, args);
    } else if (command == "help") {
        client.commands.get("help").execute(message, args);
    } else if (command == "skaper") {
        client.commands.get("skaper").execute(message, args);
    } else if (command == "skjermproblemer") {
        client.commands.get("skjermproblemer").execute(message, args);
    } else if (command == "list") {
        client.commands.get("list").execute(message, args);
    }

    //ID Tech support kjell server
    // if (message.member.roles.cache.has("925098318596562984")){
    //     client.commands.get("admin").execute(message, args);
    // } else {
    //     message.channel.send("Du er ikke admin");
    // };

    if (typeof command !== "undefined") {
        message.channel.send("Kommando finnes ikke, bruk **!list** for å se alle kommandoer.");
    }
  
});



// logger at botten er pålogget Kjell og co bot er pålogget
client.once("ready", () => {
    console.log("Kjell og co bot er pålogget");
});


client.login(config.token);