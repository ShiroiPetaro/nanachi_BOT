module.exports.run = (client, message, args, queue, searcher) => {
    message.channel.send("Hi")
}

module.exports.config = {
    name: "hello",
    aliases: ["hi", "yo", "mori"]
}