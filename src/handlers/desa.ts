import { Message } from 'whatsapp-web.js';

const helpHandler = (message: Message) => {
  message.reply(
    `Ketik *huruf* untuk mendapatkan kontak perangkat desa:

1. Kepala Desa
2. Sekretaris Desa
3. Kepala Urusan
4. Kepala Dusun`
  );
};

export default desaHandler;
