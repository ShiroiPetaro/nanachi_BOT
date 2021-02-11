module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
        if(!serverQueue.connection)
            return message.channel.send("Eh? No hay ninguna cancion reproduciéndose ahora mismo.");
        if(message.member.voice.channel != message.guild.me.voice.channel)
            return message.channel.send("Tienes que estar en un canal de voz primero.")
    
        let nowPlaying = serverQueue.songs[0];
        let qMsg = `Reproduciendose actualmente:\n\n${nowPlaying.title}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n`
    
        for(var i = 1; i < serverQueue.songs.length; i++){
            qMsg += `${i}. ${serverQueue.songs[i].title}\n`
        }
    
        message.channel.send('```' + qMsg + 'Pedido por: ' + message.author.username + '```')
}

module.exports.config = {
    name: "queue",
    aliases: ["q"]
}