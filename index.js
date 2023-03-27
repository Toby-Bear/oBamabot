
const{Client,GatewayIntentBits,EmbedBuilder,PermissionBitField,Permissions}= require(`discord.js`);

const prefix ='/';

const client = new Client({intents: [GatewayIntentBits.Guilds ,GatewayIntentBits.GuildMessages ,GatewayIntentBits.MessageContent]});

require('dotenv').config();
client.login(process.env.Bot_token);

client.on("ready", () => {
    console.log ("Bot is online!");
client.user.setActivity(`Obama er den varmeste løve`, {type: "Løve"});

})

client.on("messageCreate",(message) =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length);
    const command = args.toLowerCase();


 
    //message array
    const messagearray = message.content.split(" ");
    const argument = messagearray.slice(1);
    const cmd = messagearray[0];
    
    //test command
    if (command === 'test'){
        message.channel.send("Bot is working")
    }
    //Beskeder svarer
   console.log(message.content)
   console.log(command)
        if (command === 'hej'){
            message.reply('Halløjsa');
        }
        if (command.startsWith("ask")){
            const responses =["Nej din giga adem", "Ja man", "Måske man","Tænk over det", "Toast","Birgitte","Mogens","Varme tider", "Gå seng adem"]
            let response = responses[Math.floor(Math.random()*responses.length)]
            message.reply(response)
            console.log("Random answer:"+ response)
        }
    })
   



































