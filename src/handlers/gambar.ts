import { Message,MessageMedia } from 'whatsapp-web.js';

const media = await MessageMedia.fromUrl('https://github.com/TryAny42/wa-sticker-bot/blob/ceef91623f498919b091e84813963d3af484595d/assets/img/umkm.PNG');

const gambarHandler = (message: Message) => {
  message.reply(`media`
  );
};

export default gambarHandler;
