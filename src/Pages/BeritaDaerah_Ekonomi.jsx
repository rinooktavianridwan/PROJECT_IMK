import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { beritaEkonomi } from "../data/berita";

const BeritaDaerah_Ekonomi = () => {
  const [selectedBerita, setSelectedBerita] = useState(null);

  useEffect(() => {
    if (beritaEkonomi.length > 0) {
      setSelectedBerita(beritaEkonomi[0]);
    }
  }, []);

  const handleBeritaClick = (berita) => {
    setSelectedBerita(berita);
  };

  return (
    <div className="beritaPage">
      <h1>Berita Daerah Ekonomi</h1>
      <div className="content-berita">
        {selectedBerita && (
          <Card className="content-card-berita" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="content-card-judul">
                {selectedBerita.berita}
              </Card.Title>
              <Card.Text>{selectedBerita.isiberita}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
      <div className="sidebar-berita">
      <div className="search-box-berita">
              <input type="text" placeholder="Cari..." />
              <button type="submit">🔍</button>
            </div>
        <Card
          className="sidebar-card-berita"
          style={{ width: "100%", overflowY: "auto", maxHeight: "400px" }}
        >
          <ListGroup variant="flush">
            {beritaEkonomi.map((item) => (
              <ListGroup.Item
                key={item.id}
                action
                onClick={() => handleBeritaClick(item)}
                active={selectedBerita && selectedBerita.id === item.id}
                className="sidebar-item-berita"
              >
                {item.berita}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default BeritaDaerah_Ekonomi;
