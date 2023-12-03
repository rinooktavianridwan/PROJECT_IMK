import { Link } from "react-router-dom";

function KesehatanComponent({ data }) {
  return (
    <div className="content-kesehatan">
      {data.map((popupData) => (
        <div key={popupData.id}>
          <h2>{popupData.judul}</h2>
          <div className="content-kesehatan-kiri">
            <p>Jam Operasional: </p>
            <ul>
              {popupData.jam.map((jam, index) => (
                <li key={index}>{jam}</li>
              ))}
            </ul>
            <p>Tarif Layanan: {popupData.tarif}</p>
            <p>
              Alamat Website Resmi Layanan: 
              <Link
                to={popupData.alamatWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {popupData.alamatWebsite}
              </Link>
            </p>
            <p>Alamat: {popupData.alamat}</p>
            <p>Telepon: {popupData.telepon}</p>
          </div>
          <div className="content-kesehatan-kanan">
            <p>
              Email Hotline: 
              <Link
                to={`mailto:${popupData.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {popupData.email}
              </Link>
            </p>
            <p>Social Media: </p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {popupData.sosialMedia.map((socialMedia, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={socialMedia.logo}
                    alt={socialMedia.user}
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                  <span style={{ color: "blue", display: "inline-block" }}>
                    {socialMedia.user}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KesehatanComponent;
