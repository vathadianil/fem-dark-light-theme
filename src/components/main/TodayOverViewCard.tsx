import { OverviewCardDataModel } from "../../models/OverviewCardDataModel";

function TodayOverViewCard(props: { data: OverviewCardDataModel }) {
  const data = props.data;
  return (
    <div className="card card-overview">
      <div className="card__subtitle"> {data.subTitle} </div>

      <img className="card__icon" src={data.logo} alt={data.title} />

      <div className="card__count card__count--small">{data.count}</div>
      <div className={`card__change card__change--${data.indicationType}`}>
        <img src={data.indicationIcon} alt="arrow indication" />
        <div className="card__number"> {data.change}% </div>
      </div>
    </div>
  );
}

export default TodayOverViewCard;
