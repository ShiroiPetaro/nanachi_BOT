module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.");
    if(!serverQueue)
        return message.channel.send("No hay nada para saltar.");
    
    let roleN = message.guild.roles.cache.find(role => role.name === "DJ")

    if(!message.member.roles.cache.get(roleN.id))
        return message.channel.send('UPS! No tienes el rol de **"DJ"**.');

    serverQueue.connection.dispatcher.end();
    serverQueue.skipVotes = [];
}

module.exports.config = {
    name: "forceskip",
    aliases: ["fs"]
}