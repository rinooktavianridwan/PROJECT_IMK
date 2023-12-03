import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { profil } from "../data/profil";

const ProfilDaerah = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    if (profil.length > 0) {
      setSelectedDoc(profil[0]);
    }
  }, []);

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="layout">
      <h1>Profil Daerah</h1>
      <div className="sidebar">
        <Card className="sidebar-card-profil" style={{ width: "100%" }}>
          <ListGroup variant="flush">
            {profil.map((item) => (
              <ListGroup.Item
                key={item.id}
                action
                onClick={() => handleDocClick(item)}
                active={selectedDoc && selectedDoc.id === item.id}
                className="sidebar-item-profil"
              >
                {item.judul}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
      <div className="content-profil">
        {selectedDoc && (
          <Card className="content-card-profil" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="content-card-judul">
                {selectedDoc.judul}
              </Card.Title>
              {selectedDoc.gambar && (
                <img src={selectedDoc.gambar} alt={selectedDoc.judul} />
              )}
              <Card.Text>{selectedDoc.isi}</Card.Text>
              <Card.Text>{selectedDoc.isi1}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfilDaerah;
