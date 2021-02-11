module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Tienes que unirte a un chat de voz primero.");
    if(!serverQueue)
        return message.channel.send("No hay nada para poder poner en búcle.");
    if(args.length < 1) 
        return message.channel.send("Que tipo de loop quieres? Tenemos: <all/one/off>")
    
    switch(args[0].toLowerCase()){

        case 'all':
            serverQueue.loopall = !serverQueue.loopall;
            serverQueue.loopone = false;

            if(serverQueue.loopall === true)
                message.channel.send("El loop ha sido **habilitado** en toda la cola")
            else
                message.channel.send("El loop ha sido **deshabilitado** en toda la cola")
            break;
        case 'one':
            serverQueue.loopone = !serverQueue.loopone;
            serverQueue.loopall = false;

            if(serverQueue.loopone === true)
                message.channel.send("El loop ha sido **habilitado** en la canción.")
            else
                message.channel.send("El loop ha sido **deshabilitado** en la canción.")
            break;
        case 'off':
            serverQueue.loopall = false;
            serverQueue.loopone = false;

            message.channel.send("El loop ha sido **deshabilitado**.");
            break;
        default: 
            message.channel.send("Tienes que decirme que tipo de loop quieres: (all/one/off)");
    }

}

module.exports.config = {
    name: "loop",
    aliases: ["l"]
}