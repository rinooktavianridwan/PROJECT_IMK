import { useState } from "react";
import { Link } from "react-router-dom";
import { layananKependudukan } from "../data/layanandaerah";

function LayananDaerah_Kependudukan() {
  const [activeService, setActiveService] = useState(null);

  const handleClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="kependudukan-container">
      <h1>Layanan Kependudukan dan Tempat Tinggal</h1>
      {layananKependudukan.map((service, index) => (
        <div key={service.id} className="kependudukan-item">
          <button type="button" onClick={() => handleClick(index)}>
            {service.nama}
          </button>
          {activeService === index && (
            <div className="kependudukan-content">
              {service.Isi.map((isi, isiIndex) => (
                <div key={isiIndex}>
                  <h3>{isi.judul}</h3>
                  <ul>
                    {isi.persyaratan.map((persyaratan, persyaratanIndex) => (
                      <li key={persyaratanIndex}>{persyaratan}</li>
                    ))}
                  </ul>
                  {isi.catatan.map((catatan, catatanIndex) => (
                    <p key={catatanIndex}>{catatan}</p>
                  ))}
                </div>
              ))}
              <p>{service.namaDownload}</p>
              <ul>
                {service.downloadLink.map(
                  (download, downloadIndex) =>
                    // Cek apakah download.namaDokumen tidak kosong
                    download.namaDokumen && (
                      <li key={downloadIndex}>
                        <Link
                          to={download.linkDokumen}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {download.namaDokumen}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LayananDaerah_Kependudukan;
