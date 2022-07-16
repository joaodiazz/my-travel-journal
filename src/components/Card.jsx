import point from "../images/pointMap.svg";

const Card = (props) => {
  return (
    <article className="card">
      <img
        src={props.items.image}
        alt={props.items.title}
        className="mainImg"
      />

      <div className="card--text">
        <div className="country">
          <img src={point} alt="point map icon" className="pointMap" />
          <p>{props.items.location}</p>
          <a href={props.items.mapsURL} target="_blank">
            View on Google Maps
          </a>
        </div>

        <div className="card--info">
          <h1 className="card--place">{props.items.title}</h1>
          <p className="card--date">
            {props.items.startDate} - {props.items.endDate}
          </p>
          <p className="card--description">{props.items.description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
