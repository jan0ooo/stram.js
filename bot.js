const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'
 





client.on("message",async message => {
  if(message.content === '.wt'){//الامر
  if (!devs1.includes(message.author.id)) return message.reply('**أنت لا تمتلك صلاحيات في البوت للأسف**')
 
 
      let shop = '';
        let fillter = m => m.author.id === message.author.id
 
             message.channel.send("**قم بكتابة الواتشينق**").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
             })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       // 90 + 40 + 20 + 20 + 10 + 20 = 200
         client.user.setActivity(shop, {type:'WATCHING'});
       
 
   
       })
             })
  }
  });
 
   
       
    client.on("message",async message => {
  if(message.content === '.pl'){//الامر
      if (!devs1.includes(message.author.id)) return message.reply('**أنت لا تمتلك صلاحيات في البوت للأسف**')
 
 
 
      let shop = '';
        let fillter = m => m.author.id === message.author.id
 
             message.channel.send("**قم بكتابة البلاينق**").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
             })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       
       client.user.setGame(shop);
 
   
       })
             })
  }
  });
  client.login(process.env.BOT_TOKEN);

  
