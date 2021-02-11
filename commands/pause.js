module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.");
    if(!serverQueue)
        return message.channel.send("No hay nada para poder pausar.");
    if(serverQueue.connection.dispatcher.paused)
        return message.channel.send("Esta canción ya está pausada.");
    serverQueue.connection.dispatcher.pause();
    message.channel.send("La canción ha sido pausada!")
        
    
}

module.exports.config = {
    name: "pause",
    aliases: ["pa"]
}