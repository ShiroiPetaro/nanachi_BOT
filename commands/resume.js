module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.");
    if(!serverQueue)
        return message.channel.send("No hay nada para poder reanudar.");
    if(serverQueue.connection.dispatcher.resumed)
        return message.channel.send("Esta canción ya está siendo reproducida.");
    serverQueue.connection.dispatcher.resume();
    message.channel.send("La canción ha sido reanudada!")
}

module.exports.config = {
    name: "resume",
    aliases: ["r"]
}