import { Message } from 'whatsapp-web.js';

const desaHandler = (message: Message) => {
  message.reply(
    `Perangkat Desa Mendolo Lor:

A. Badan Permusyawaratan Desa : Sukirman
B. Kepala Desa/Lurah			    : Winarno
C. Sekretaris Desa		        : Teguh Wahyono
D. Kasi Pemerintahan		      : S. Harianto
E. Kasi Pembangunan			      : Suwadu
F. Kasi Kesejahteraan Rakyat	: Imam Ahmadi
G. Kasi Urusan Umum		        : Supriyanto
H. Kasi Urusan Keuangan		    : S. Indra Wibowo
I. Kasi Perencanaan		        : Supriyadi
J. Kepala Dusun Krajan        : Sumarno
K. Kepala Dusun Kembang	      : Joko Priyono
L. Kepala Dusun Pagerjo	      : Suranto
M. Kepala Dusun Pangkah	      : Tumadi
N. Kepala Dusun Ngaglik	      : Suyadi
O. Kepala Dusun Dukun	        : Sumarno
P. Kepala Dusun Ngepoh        : Joko Susilo` 
  );
};

export default desaHandler;
