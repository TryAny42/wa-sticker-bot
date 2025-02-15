import { Message,MessageMedia } from 'whatsapp-web.js';

import goErrorHandler from '../utils/goErrHandler';

const umkmHandler = async (message: Message) => {
        
  const media = await MessageMedia.fromUrl('https://i.ibb.co/VMzbfqy/umkm.png');
  
  const { error: replyError } = await goErrorHandler(() =>
    message.reply(media, message.from)
  );
  if (replyError instanceof Error) {
    message.reply('Terjadi kesalahan pada saat mengirim gambar');
    return console.error('Error when sending sticker.', replyError);
  }
};

/*const umkmHandler = (message: Message) => {
  message.reply(
    `Berikut data UMKM yang ada di Mendolo Lor:
/*
Krajan
1  |   Keripik Singkong    |    Ria Indah    | 085800053183 |
2  |  Keripik tempe Sagu   |  Wingky Ananta  | 083846238404 |
3  |  Keripik Tempe Sagu   | Fitri Handayani | 083135006846 |
4  |     Kerupuk Kulit     |    Slametini    |       -      |
5  |       Gula Jawa       |    Suprihatin   |       -      |

Pagerjo
6  | Snack Olahan Singkong |      Sumini     | 085259679093 |
7  |   Keripik dan Snack   |    Suhartini    |       -      |

Dukun
8  |    Makanan Ringan     |   Sri Lestari   |  087837788   |

Pangkah
9  |     Kerupuk Kulit     |      Katini     | 085223967862 |

Ngaglik
10 |     Kerupuk Kulit     |      Susimah    |       -      |
11 |    Kembang Goyang     |     Nuryanti    | 085330334940 |

Kembang
12 |      Kusen Kayu       |       Joko      |       -      |
13 | Kusen, Anyaman, Areng |      Mulyono    |       -      |
14 |     Industri Kayu     |  Slamet Riyadi  |       -      |`
  );
};*/

export default umkmHandler;
