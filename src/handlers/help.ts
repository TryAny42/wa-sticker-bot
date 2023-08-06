import { Message } from 'whatsapp-web.js';

const helpHandler = (message: Message) => {
  message.reply(
    `Selamat datang di Layanan Informasi *Desa Mendolo Lor*
Ketik angka untuk memilih layanan kami:

1. Pemerintah Desa
2. Kegiatan Desa Bulan Ini
3. Data UMKM
4. Tata Cara Permohonan Surat
5. Website Desa`
  );
};

export default helpHandler;
