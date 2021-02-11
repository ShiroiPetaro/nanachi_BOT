module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("No hay ninguna canción reproduciéndose ahora mismo.")
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.")
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}       

module.exports.config = {
    name: "stop",
    aliases: []
}