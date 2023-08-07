import { Message,MessageMedia } from 'whatsapp-web.js';

import goErrorHandler from '../utils/goErrHandler';
import printLog from '../utils/logger';

const gambarHandler = async (message: Message) => {
        
  const media = await MessageMedia.fromUrl('https://i.ibb.co/VMzbfqy/umkm.png');
  
  const { error: replyError } = await goErrorHandler(() =>
    message.reply(media, message.from)
  );
  if (replyError instanceof Error) {
    message.reply('Terjadi kesalahan pada saat mengirim gambar');
    return console.error('Error when sending sticker.', replyError);
  }
};


export default gambarHandler;
