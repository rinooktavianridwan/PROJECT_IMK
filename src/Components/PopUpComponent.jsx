import { Link } from "react-router-dom";

function PopUpComponent({ data, closePopup }) {
  return (
    <div className="popUp">
      {data.map((item) => (
        <div key={item.no} className="popUpItem">
          <Link to={item.path}>
            <button className="popUpButton" onClick={closePopup}>
              {item.buttonText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PopUpComponent;
