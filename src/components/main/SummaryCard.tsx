import React from "react";
import { SummaryCardDataModel } from "../../models/SummaryCardModel";

function SummaryCard(props: { data: SummaryCardDataModel }) {
  const data = props.data;
  return (
    <div className={`card card--${data.title}`}>
      <div className="card__platform">
        <img className="card__icon" src={data.logo} alt={data.title} />
        <div className="card__username"> {data.userName} </div>
      </div>
      <div className="card__followers">
        <div className="card__count card__count--big">{data.count}</div>
        <div className="card__label">Followers</div>
      </div>

      <div className={`card__change card__change--${data.indicationType}`}>
        <img src={data.indicationIcon} alt="arrow indication" />
        <div className="card__number"> {data.change} Today </div>
      </div>
    </div>
  );
}

export default SummaryCard;
