import { Message } from 'whatsapp-web.js';

const eventHandler = (message: Message) => {
  message.reply(`Kegiatan Desa Mendolo Lor bulan Agustus 2023:
  
1. 
2. 
3. `
  );
};

export default eventHandler;
