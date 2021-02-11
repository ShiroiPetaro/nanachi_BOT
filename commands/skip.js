module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("No hay música reproduciéndose ahora mismo.");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Métete dentro del canal de voz, ¿no?");

    let usersC = message.member.voice.channel.members.size;
    let required = Math.ceil(usersC/2);

    if(serverQueue.skipVotes.includes(message.member.id))
        return message.channel.send("Si... ya has votado.")

    serverQueue.skipVotes.push(message.member.id)
    message.channel.send(`Has votado para saltar la canción: ${serverQueue.skipVotes.length}/${required} votos`)

    if(serverQueue.skipVotes.length >= required){
        serverQueue.connection.dispatcher.end();
        serverQueue.skipVotes = [];
        message.channel.send("Murió.")
    }
}

module.exports.config = {
    name: "skip",
    aliases: ["s", "sk"]
}