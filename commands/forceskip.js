module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.");
    if(!serverQueue)
        return message.channel.send("No hay nada para saltar.");
    

    if(!message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send('Nanachi no te obedece');
    
        


    serverQueue.connection.dispatcher.end();
    serverQueue.skipVotes = []; 
}

module.exports.config = {
    name: "forceskip",
    aliases: ["fs"]
}