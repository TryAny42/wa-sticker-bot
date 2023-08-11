import { Message } from 'whatsapp-web.js';

const desaHandler = (message: Message) => {
  message.reply(
    `Ketik *huruf* untuk mendapatkan kontak perangkat desa:

A. Badan Permusyawaratan Desa		
B. Kepala Desa/Lurah			
C. Sekretaris Desa		
D. Kasi Pemerintahan		
E. Kasi Pembangunan			
F. Kasi Kesejahteraan Rakyat	
G. Kasi Urusan Umum		
H. Kasi Urusan Keuangan		
I. Kasi Perencanaan		
J. Kepala Dusun Krajan
K. Kepala Dusun Kembang	
L. Kepala Dusun Pagerjo	
M. Kepala Dusun Pangkah	
N. Kepala Dusun Ngaglik	
O. Kepala Dusun Dukun	
P. Kepala Dusun Ngepoh`
  );
};

export default desaHandler;
