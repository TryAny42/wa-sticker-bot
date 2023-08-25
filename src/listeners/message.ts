import { Message } from 'whatsapp-web.js';

import desaHandler from '../handlers/desa';
import eventHandler from '../handlers/event';
import umkmHandler from '../handlers/umkm';
import suratHandler from '../handlers/surat';
import websiteHandler from '../handlers/website';
import gambarHandler from '../handlers/gambar';
import helpHandler from '../handlers/help';
import stickerHandler from '../handlers/sticker';
import goErrorHandler from '../utils/goErrHandler';
import parseOptions from '../utils/parseOptions';

const messageListener = async (message: Message) => {
  // get contact info
  const { data: contact, error } = await goErrorHandler(() =>
    message.getContact()
  );
  if (!contact) {
    message.reply('Terjadi kesalahan pada saat mendapatkan info kontak');
    return console.error('Error when getting contact.', error);
  }

  // stop the listener if message is from a status or from a group
  if (message.isStatus || contact.isGroup) return;

  // parse command and options
  const [command, ...rest] = message.body.split(' ').map((cmd) => cmd.trim());
  const options = rest
    .join(' ')
    .replaceAll(' name', '|name')
    .replaceAll(' author', '|author')
    .split('|');
  const { stickerName, stickerAuthor } = parseOptions(options);

  // handle desa
  if (command.toLowerCase().includes('1')) {
    return desaHandler(message);
  }

  // handle event
  if (command.toLowerCase().includes('2')) {
    return eventHandler(message);
  }

  // handle umkm
  if (command.toLowerCase().includes('3')) {
    return umkmHandler(message);
  }

  // handle surat
  if (command.toLowerCase().includes('4')) {
    return suratHandler(message);
  }

  // handle website
  if (command.toLowerCase().includes('5')) {
    return websiteHandler(message);
  }

  // handle gambar
  if (command.toLowerCase().includes('6')) {
    return gambarHandler(message);
  }
  
  // handle help
  if (command.toLowerCase().includes('!help')) {
    return helpHandler(message);
  }

  // handle sticker
  if (['!sticker', '!stiker'].includes(command) && message.type === 'image') {
    await stickerHandler({
      message,
      phoneNumber: contact.id.user,
      stickerName,
      stickerAuthor,
    });

    return;
  } else if (command.toLowerCase().includes('sticker')) {
    return message.reply('Gambarnya mana?');
  }
};

export default messageListener;
