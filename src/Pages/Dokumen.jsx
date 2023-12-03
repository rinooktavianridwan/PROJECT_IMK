import { dokumen } from "../data/dokumen";
import { Link } from "react-router-dom";

function Dokumen() {
  return (
    <div className="dokumen">
      <h2>Dokumen Daerah</h2>
      <div className="search-box-dokumen">
        <input type="text" placeholder="Cari..." />
        <button type="submit">🔍</button>
      </div>
      <div
        className="dokumen-frame"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {dokumen.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to={item.path} target="_blank" style={{ width: "100%" }}>
              <button
                className="dokumen-button"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={item.gambar}
                  alt={item.namaDokumen}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginRight: "50px",
                  }}
                />
                <p style={{ margin: 0 }}>{item.namaDokumen}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumen;
