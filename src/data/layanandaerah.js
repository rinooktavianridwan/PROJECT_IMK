import gambarPersada from "../assets/RS_Persada.png"
import gambarMWP from "../assets/RSIA_Mardi_Waloeja_Rampal.png"
import gambarLavalette from "../assets/RSU_Lavalette.png"
import gambarMuhamadiyah from "../assets/RSU_Muhammadiyah_Malang.png"
import gambarSA from "../assets/RSUD_Dr_Saiful_Anwar.png"


import tiktok from "../assets/Tiktok_Icon.png"
import youtube from "../assets/Youtube_Icon.png"
import twiter from "../assets/Twiter_Icon.png"
import facebook from "../assets/Facebook_Icon.png"
import instagram from "../assets/Instagram_Icon.png"

//Layanan Daerah Kesehatan Page
export const layananKesehatan=[
  {
    id : 1,
    gambar : gambarSA,
    nama : "RSUD Dr. Saiful Anwar",
    judul : "RSUD Dr. Saiful Anwar",
    jam : ["Senin - Kamis  (07.00 - 13.30)", "Jumat (07.00 - 11.00)"],
    tarif : "UMUM, BPJS, SKTM",
    alamatWebsite : "https://rsusaifulanwar.jatimprov.go.id/",
    alamat : "Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65112.",
    telepon : "(0341) 362101",
    email : "staf-rsu-drsaifulanwar@jatimprov.go.id",
    sosialMedia : [
      {
        logo : instagram,
        user : "rssaifulanwar",
      },
      {
        logo : facebook,
        user : "rsud dr.Saiful Anwar",
      },
      {
        logo : twiter,
        user : "@rsudsaifulanwar",
      }
    ]
  },
  {
    id : 2,
    gambar : gambarLavalette,
    nama : "RSU Lavalette",
    judul : "RSU Lavalette",
    jam : ["Senin - Sabtu   (07.00 - 21.00)"],
    tarif : "UMUM, BPJS,",
    alamatWebsite : "https://lavalettehospital.com/",
    alamat : " Jl. Wr Supratman No. 10, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111.",
    telepon : "(0341) 470805",
    email : "rslavalette.nsm@gmail.com",
    sosialMedia : [
      {
        logo : instagram,
        user : "ihc_rslavalette"
        
      },
      {
        logo : facebook,
        user : "Rumah Sakit Lavalette"
        
      },
      {
        logo : youtube,
        user : "Rumah Sakit Lavalette"
        
      }
    ]
  },
  {
    id : 3,
    gambar : gambarMuhamadiyah,
    nama : "RSU Muhammadiyah Malang",
    judul : "RS Universitas Muhammadiyah Malang",
    jam : ["Senin - Minggu   (00.00-23.59)"],
    tarif : "UMUM, BPJS",
    alamatWebsite : "https://ummhospital.com/",
    alamat : "Alamat: Jl. Raya Ngelo Tlogomas No.45, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144.",
    telepon : "(0341)-561666",
    email : "hospital@umm.ac.id",
    sosialMedia : [
      {
        logo : instagram,
        user : "Ummhospital"
      },
      {
        logo : facebook,
        user : "Hospital.Umm"
      },
      {
        logo: youtube,
        user : "UMM Hospital"
      },
      {
        logo : twiter,
        user : "@Ummhospital"
      }
    ]
  },
  {
    id : 4,
    gambar : gambarMWP,
    nama : "RSIA Mardi Waloeja Rampal ",
    judul : "RSIA Mardi Waloeja Rampal",
    jam : ["Senin - Sabtu   (07.00 - 20.00)"],
    tarif : "UMUM, BPJS",
    alamatWebsite : "https://rsiamawar.com/",
    alamat : "Jl. Wr. Supratman 1, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
    telepon : "(0341)-364756",
    email : "rsia.mardiwaloeja.rampal@gmail.com",
    sosialMedia : [
      {
        logo : instagram,
        user : "rsiamawarmalang"
      },
      {
        logo : tiktok,
        user : "rsiamawarmalang"
      }
    ]
  },
  {
    id : 5,
    gambar : gambarPersada,
    nama : "RS Persada",
    judul : "RS Persada",
    jam : ["Senin - Sabtu (07.00 - 21.00)"],
    tarif : "UMUM, BPJS",
    alamatWebsite : "https://persadahospital.co.id/",
    alamat : "Kompleks Araya Business Center Kav. II-IV, Jl. Panji Suroso, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65126",
    telepon : "(0341) 299633",
    email : "info@persadahospital.co.id ",
    sosialMedia : [
      {
        logo : instagram,
        user : "persada_hospital"
      },
      {
        logo : facebook,
        user : "Info Persada Hospital"
      },
      {
        logo : youtube,
        user : "Persada Hospital TV"
      },
      {
        logo : twiter,
        user : "@PersadaHospital"
      }
    ]
  },
]


// Layanan Kependudukan Page
export const layananKependudukan = [
    {
      id: 1,
      nama: "KARTU KELUARGA",
      Isi: [
        {
          judul: "KK BARU UNTUK PENDUDUK WNI",
          persyaratan: [
            "Mengisi formulir pengajuan KK (F1-01) dengan Tanda tangan kepala keluarga ",
            "Buku nikah/kutipan akta perkawinan atau kutipan akta perceraian ",
            "Surat keterangan pindah/surat keterangan pindah datang bagi penduduk yang pindah dalam wilayah Negara Kesatuan Republik Indonesia",
            "Surat keterangan pindah luar negeri yang diterbitkan oleh DISDUKCAPIL kabupaten/kota bagi wni yang datang dari luar wilayah Negara Kesatuan Republik Indonesia karena pindah",
            "Surat keterangan pengganti tanda identitas bagi penduduk rentan administrasi kependudukan",
            "Petikan keputusan presiden tentang pewarganegaraan dan berita acara pengucapan sumpah atau pernyataan janji setia bagi penduduk WNI yang semula berkewarga negaraan asing atau petikan keputusan menteri yang menyelenggarakan urusan pemerintahan bidang hukum tentang perubahan status kewarganegaraan.",
          ],
          catatan: [""],
        },
        {
          judul: "PENERBITAN KK KARENA PERUBAHAN DATA",
          persyaratan: [
            "Mengisi fomulir pengajuan KK (F1-01) dengan Tanda tangan kepala keluarga ",
            "KK lama",
            "Surat keterangan/bukti perubahan peristiwa kependudukan dan peristiwa penting.",
          ],
          catatan: [""],
        },
        {
          judul: "PENERBITAN KK KARENA HILANG ATAU RUSAK BAGI PENDUDUK WNI",
          persyaratan: [
            "Surat Keterangan hilang dari kepolisian atau KK yang rusak ",
            "KTP-Elektronik",
          ],
          catatan: [""],
        },
      ],
      namaDownload: "Formulir dapat diunduh di bawah ini:",
      downloadLink: [
        {
          namaDokumen: "F1-01 formulir biodata keluarga",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2022/09/F1.01-Form-KK-fix.pdf",
        },
        {
          namaDokumen: "Surat Pernyataan Belum Masuk KK Manapun",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-KK.pdf",
        },
        {
          namaDokumen:
            "F-1.04 Surat Pernyataan Tidak Memiliki Dokumen Kependudukan",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-1.04_Surat_Pernyataan_Tidak_Memiliki_Dokumen_Kependudukan.pdf",
        },
      ],
    },
    {
      id: 2,
      nama: "KARTU TANDA PENDUDUK",
      Isi: [
        {
          judul: "KTP BARU",
          persyaratan: [
            "Fotocopy KK TERBITAN DUKCAPIL",
            "Fotocopy AKTA KELAHIRAN",
            "Bagi penduduk yang belum berusia 17 (tujuh belas) tahun namun sudah menikah atau sudah kawin atau pernah kawin, melampirkan surat nikah/akta perkawinan",
            "Surat Pindah dalam (dalam wilayah NKRI).",
          ],
          catatan: [""],
        },
        {
          judul: "KTP HILANG DAN RUSAK",
          persyaratan: [
            "Surat kehilangan dari kepolisian",
            "Fotocopy KK TERBITAN DUKCAPIL",
            "Membawa KTP asli untuk penggantian yang rusak.",
          ],
          catatan: [""],
        },
        {
          judul: "PERUBAHAN KTP YANG SALAH / DIRUBAH",
          persyaratan: [
            "Fotocopy KK TERBITAN DUKCAPIL",
            "Fotocopy AKTA KELAHIRAN",
            "Fotocopy IJAZAH",
            "Fotocopy SURAT NIKAH ATAU SURAT CERAI BAGI PERUBAHAN STATUS",
            "Kartu Tanda Penduduk (KTP) asli",
          ],
          catatan: [""],
        },
      ],
      namaDownload: "",
      downloadLink: [
        {
          namaDokumen: "",
          linkDokumen: "",
        },
      ],
    },
    {
      id: 3,
      nama: "KARTU IDENTITAS ANAK",
      Isi: [
        {
          judul: "PERSYARATAN BUAT BARU KIA",
          persyaratan: [
            "Prioritas usia anak O-kurang dari 17 tahun",
            "Fotokopi Akta Kelahiran",
            "Fotokopi KK orangtua/wali",
            "Fotokopi KTP-el kedua orangtua",
            " Pasfoto 2x3 (2 lembar untuk anak umur diatas 5 tahun)",
            "Fotokopi Paspor dan KITAP (Untuk WNA)",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN KIA YANG HILANG",
          persyaratan: [
            "Surat Keterangan Kehilangan dari kepolisian",
            "Fotokopi KK orangtua/wali",
          ],
          catatan: [""],
        },
      ],
      namaDownload: "Formulir dapat diundah di bawah ini:",
      downloadLink: [
        {
          namaDokumen: "Form KIA",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2022/01/FORMULIR_KIA.pdf",
        },
      ],
    },
    {
      id: 4,
      nama: "AKTA KELAHIRAN",
      Isi: [
        {
          judul: "PERSYARATAN KUTIPAN AKTA KELAHIRAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Surat keterangan kelahiran dari rumah sakit/puskesmas/fasilitas kesehatan/dokter atau bidan.",
            "Fotokopi Buku nikah/kutipan akta perkawinan.",
            "Fotokopi KK orang tua dan/atau pelapor",
            "Surat pernyataan tanggung jawab mutlak (SPTJM) atas kebenaran data, dengan diketahui oleh dua orang saksi: 5.1. Jika tidak memiliki surat keterangan kelahiran, dan/atau 5.2. Jika tidak memiliki buku nikah/kutipan akta perkawinan tetapi status hubungan dalam KK menunjukkan sebagai suami-istri.",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN KUTIPAN AKTA KELAHIRAN YANG HILANG/RUSAK",
          persyaratan: [
            "Form permohonan.",
            "Fotokopi KK pemohon.",
            "Surat keterangan kehilangan dari kepolisian.",
            "Fotokopi Kutipan akta kelahiran (jika ada).",
            "Kutipan akta kelahiran yang rusak.",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PERUBAHAN NAMA PADA KUTIPAN AKTA KELAHIRAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Salinan penetapan pengadilan negeri.",
            "Kutipan akta kelahiran.",
            "Fotokopi Kartu Keluarga.",
            "Fotokopi Dokumen perjalanan bagi orang asing.",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PEMBETULAN KUTIPAN AKTA KELAHIRAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Dokumen autentik yang menjadi dasar untuk pembetulan.",
            "Kutipan akta kelahiran yang terdapat kesalahan.",
            "Fotokopi KK pemohon.",
            "Surat pernyataan tanggung jawab mutlak (SPTJM).",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PEMBATALAN KUTIPAN AKTA PENCATATAN SIPIL",
          persyaratan: [
            "Mengisi F-2.01.",
            "FC. Salinan putusan pengadilan yang telah memiliki kekuatan hukum tetap.",
            "Kutipan akta pencatatan sipil yang dibatalkan.",
            "Fotokopi KK.",
            "Surat pernyataan tanggung jawab mutlak (SPTJM).",
          ],
          catatan: [""],
        },
        {
          judul: "Formulir dapat diundah di bawah ini",
          persyaratan: [
            "Blanko F2-01 (Isian Data Kelahiran)",
            "Formulir Pelaporan Kelahiran",
            "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran",
            "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri",
            "Surat Pernyataan Tanggung Jawab Mutlak untuk Penerbitan Akta Pencatatan Sipil",
          ],
          catatan: [""],
        },
      ],
      namaDownload: "Formulir dapat diunduh di bawah ini:",
      downloadLink: [
        {
          namaDokumen: "Blanko F2-01 (Isian Data Kelahiran)",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/f201-baru.pdf",
        },
        {
          namaDokumen: "Formulir Pelaporan Kelahiran",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/FORMULIR-PELAPORAN-KELAHIRAN.pdf",
        },
        {
          namaDokumen:
            "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.03_Surat_Pernyataan_Tanggung_Jawab_Mutlak_Kebenaran_Data_Kelahiran.pdf",
        },
        {
          namaDokumen:
            "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.04_Surat_Pernyataan_Tanggung_Jawab_Mutlak_Kebenaran_Sebagai_Pasangan_Suami_Isteri.pdf",
        },
        {
          namaDokumen:
            "Surat Pernyataan Tanggung Jawab Mutlak untuk Penerbitan Akta Pencatatan Sipil",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-CAPIL-1.pdf",
        },
      ],
    },
    {
      id: 5,
      nama: "AKTA KEMATIAN",
      Isi: [
        {
          judul: "PERSYARATAN KEPENGURUSAN AKTA KEMATIAN",
          persyaratan: [
            "Mengisi form F-2.01.",
            "Surat keterangan kematian dari dokter/RS/lurah.",
            "Dokumen kependudukan: KK almarhum (alm), KIP almarhum (alm), KTP suami atau istri almarhum (alm)",
            "SPTJM.",
          ],
          catatan: [
            "Catatan: SPTJM digunakan apabila ada ketidaksesuaian atas data permintaan pemohon.",
            "Berkas permohonan yang lengkap masukkan map berwarna hijau.",
          ],
        },
        {
          judul: "PERSYARATAN KUTIPAN AKTA KEMATIAN YANG HILANG/RUSAK",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi KK pemohon.",
            "Surat keterangan kematian dari kepolisian.",
            "Fotokopi Kutipan akta kematian (jika ada).",
            "Kutipan akta kematian yang rusak.",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PERUBAHAN NAMA PADA KUTIPAN AKTA KEMATIAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Salinan penetapan pengadilan negeri.",
            "Kutipan akta kematian.",
            "Fotokopi Kartu Keluarga.",
            "Fotokopi Dokumen perjalanan bagi orang asing.",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PEMBETULAN KUTIPAN AKTA KEMATIAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Dokumen autentik yang menjadi pendukung untuk pembetulan.",
            "Kutipan akta kematian yang terdapat kesalahan.",
            "Fotokopi KK pemohon.",
            "Surat pernyataan tanggung jawab mutu (SPTJM).",
          ],
          catatan: [""],
        },
        {
          judul: "PERSYARATAN PEMBATALAN KUTIPAN AKTA PENCATATAN SIPIL",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Salinan putusan pengadilan yang telah mempunyai kekuatan hukum tetap.",
            "Kutipan akta pencatatan sipil yang dibatalkan.",
            "Fotokopi KK.",
            "Surat pernyataan tanggung jawab mutu (SPTJM).",
          ],
          catatan: [""],
        },
        {
          judul: "Formulir ",
          persyaratan: [
            "Banko F2-01 Pelaporan Pencatatan Sipil di dalam wilayah NKRI",
            "SPTJM Peristiwa Kematian",
            "SPTJM untuk Penerbitan Akta Pencatatan Sipil",
          ],
          catatan: [""],
        },
      ],
      namaDownload: "Formulir dapat diunduh di bawah ini:",
      downloadLink: [
        {
          namaDokumen:
            "Banko F2-01 Pelaporan Pencatatan Sipil di dalam wilayah NKRI",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/f201-baru.pdf",
        },
        {
          namaDokumen: "SPTJM Peristiwa Kematian",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/SPTJM-kebenaran-peristiwa-kematian.pdf",
        },
        {
          namaDokumen: "SPTJM untuk Penerbitan Akta Pencatatan Sipil",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-CAPIL-1.pdf",
        },
      ],
    },
    {
      id: 6,
      nama: "AKTA PERKAWINAN",
      Isi: [
        {
          judul: "PERSYARATAN KEPENGURUSAN AKTA PERKAWINAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Surat keterangan telah terjadinya perkawinan dari pemuka agama atau penghayat kepercayaan terhadap Tuhan Yang Maha Esa.",
            "Pas foto berwarna dan istri ukuran 4x6 1 lembar.",
            "KTP-el asli.",
            "KK asli.",
            "Bagi janda atau duda karena cerai mati, melampirkan fotokopi akta kematian pasangannya.",
            "Bagi janda atau duda karena cerai hidup, melampirkan fotokopi akta perceraian.",
          ],
          catatan: [
            "Catatan: SPTJM digunakan apabila ada ketidaksesuaian data atas permintaan pemohon.",
            "Berkas permohonan yang lengkap masukkan map berwarna merah.",
          ],
        },
      ],
      namaDownload: "Formulir dapat diunduh di bawah ini:",
      downloadLink: [
        {
          namaDokumen: "Formulir Perkawinan",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.01_Pelaporan_Pencatatan_Sipil_di_dalam_wilayah_NKRI-2.pdf",
        },
      ],
    },
    {
      id: 7,
      nama: "AKTA CERAI",
      Isi: [
        {
          judul: "PERSYARATAN KEPENGURUSAN AKTA PERCERAIAN",
          persyaratan: [
            "Mengisi F-2.01.",
            "Fotokopi Salinan putusan perceraian dari pengadilan yang telah mempunyai kekuatan hukum tetap.",
            "Kutipan akta perkawinan asli.",
            "KTP-el asli.",
            "KK asli.",
          ],
          catatan: [
            "Catatan: SPTJM digunakan apabila ada ketidaksesuaian data atas permintaan pemohon.",
          ],
        },
      ],
      namaDownload: "Formulir dapat diunduh di bawah ini:",
      downloadLink: [
        {
          namaDokumen: "Formulir Perceraian",
          linkDokumen:
            "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.01_Pelaporan_Pencatatan_Sipil_di_dalam_wilayah_NKRI-2.pdf",
        },
      ],
    },
  ];

