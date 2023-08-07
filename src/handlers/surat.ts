import { Message } from 'whatsapp-web.js';

const suratHandler = (message: Message) => {
  message.reply(`Pembuatan surat di Desa Mendolo Lor dapat dilakukan dengan dua cara, yaitu datang langsung ke Kantor Desa Mendolo Lor dan melakukan permohonan melalui website Desa
  
Berikut tata cara untuk melakukan permohonan surat melalui website desa:
1.
2.
3.`
  );
};

export default suratHandler;

