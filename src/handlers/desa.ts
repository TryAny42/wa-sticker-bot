import { Message } from 'whatsapp-web.js';

const desaHandler = (message: Message) => {
  message.reply(
    `Ketik *huruf* untuk mendapatkan kontak perangkat desa:

A. Kepala Desa
B. Sekretaris Desa
C. Kepala Urusan
D. Kepala Dusun`
  );
};

export default desaHandler;
