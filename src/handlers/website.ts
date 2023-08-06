import { Message } from 'whatsapp-web.js';

const helpHandler = (message: Message) => {
  message.reply(`https://mendololor.kabpacitan.id/
  Buka website Desa Mendolo Lor untuk mendapatkan informasi terbaru desa`
  );
};

export default websiteHandler;
