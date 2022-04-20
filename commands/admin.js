module.exports = {
    name: "admin", 
    description: "check if you are a admin",
    execute(message, args) {
        message.channel.send("Du er admin :)");
    }
}