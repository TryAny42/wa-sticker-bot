import { Message,MessageMedia } from 'whatsapp-web.js';

import goErrorHandler from '../utils/goErrHandler';
import printLog from '../utils/logger';

/*const media = async () => {
        await MessageMedia.fromUrl('https://github.com/TryAny42/wa-sticker-bot/blob/ceef91623f498919b091e84813963d3af484595d/assets/img/umkm.PNG');
};

const gambarHandler = (message: Message) => {
  message.reply(media, message.from
  );
};


const gambarHandler = async ({
  message,
}: GambarHandlerParams) => {*/

//type GambarHandlerParams = {
//  message: Message;
//};

const gambarHandler = async (message: Message) => {
        
  //const media = async () => {
  //      await MessageMedia.fromUrl('https://github.com/TryAny42/wa-sticker-bot/blob/ceef91623f498919b091e84813963d3af484595d/assets/img/umkm.PNG');
  //};
  const media = await MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
  
  const { error: replyError } = await goErrorHandler(() =>
    message.reply(media, message.from)
  );
  if (replyError instanceof Error) {
    message.reply('Terjadi kesalahan pada saat mengirim gambar');
    return console.error('Error when sending sticker.', replyError);
  }
};


export default gambarHandler;
