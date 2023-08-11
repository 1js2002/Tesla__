import './ImageBackgroundSection.css';


import { useNavigate } from "react-router-dom";


export default function ImageBackgroundSection({
  backgroundImage,
  header,
  description,
  featureItems = [],
}) {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/shop");
  };
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="top-section">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
        <div className="bottom-section">
          {featureItems.length > 0 && (
            <ul className="feature-items">
              {featureItems.map(({ title, description }) => (
                <li key={title}>
                  <h6>{title}</h6>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          )}
          <div>
            <button onClick={handleOrderNowClick}>Order Now</button>
            <button>Demo Drive</button>
          </div>  
        </div>
      </div>
    </div>
  );
}