import { Message } from 'whatsapp-web.js';

const helpHandler = (message: Message) => {
  message.reply(
    `Selamat datang di Layanan Informasi *Desa Mendolo Lor*
Ketik angka untuk memilih layanan kami:

1. Pemerintah Desa
2. Kegiatan Desa Bulan Ini
3. Data UMKM
4. Tata Cara Permohonan Surat
5. Website Desa

*Buat stiker biasa*
\`\`\`!sticker\`\`\`

*Buat stiker dengan custom name*
\`\`\`!sticker name="Nama stiker"\`\`\`

*Buat stiker dengan custom author*
\`\`\`!sticker author="Nama author"\`\`\`

*Buat stiker dengan custom name dan author*
\`\`\`!sticker name="Nama stiker" author="Nama author"\`\`\`

*Tampilkan user guide*
\`\`\`!help\`\`\`


_Saat ini bot belum mendukung gambar png_`
  );
};

export default helpHandler;
