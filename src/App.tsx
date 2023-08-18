import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SummaryCard from "./components/main/SummaryCard";
import FacebookLogo from "./images/icon-facebook.svg";
import twitterLogo from "./images/icon-twitter.svg";
import instagramLogo from "./images/icon-instagram.svg";
import youtubeLogo from "./images/icon-youtube.svg";
import upArrow from "./images/icon-up.svg";
import downArrow from "./images/icon-down.svg";
import { SummaryCardDataModel } from "./models/SummaryCardModel";
import TodayOverViewCard from "./components/main/TodayOverViewCard";
import { OverviewCardDataModel } from "./models/OverviewCardDataModel";

const cardData: SummaryCardDataModel[] = [
  {
    title: "facebook",
    userName: "@nathang",
    count: "1987",
    change: "12",
    logo: FacebookLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "twitter",
    userName: "@nathang",
    count: "1044",
    change: "99",
    logo: twitterLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "instagram",
    userName: "@realnathanf",
    count: "11k",
    change: "1099",
    logo: instagramLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "youtube",
    userName: "@Nathan F.",
    count: "8239",
    change: "144",
    logo: youtubeLogo,
    indicationIcon: downArrow,
    indicationType: "down",
  },
];

const overViewCardData: OverviewCardDataModel[] = [
  {
    title: "facebook",
    subTitle: "Page View",
    count: "87",
    change: "3",
    logo: FacebookLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "facebook",
    subTitle: "Likes",
    count: "52",
    change: "2",
    logo: FacebookLogo,
    indicationIcon: downArrow,
    indicationType: "down",
  },
  {
    title: "instagram",
    subTitle: "Likes",
    count: "5462",
    change: "2257",
    logo: instagramLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "instagram",
    subTitle: "Profile Views",
    count: "52k",
    change: "1375",
    logo: instagramLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "twitter",
    subTitle: "Retweets",
    count: "87",
    change: "303",
    logo: twitterLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "twitter",
    subTitle: "Likes",
    count: "507",
    change: "553",
    logo: twitterLogo,
    indicationIcon: upArrow,
    indicationType: "up",
  },
  {
    title: "youtube",
    subTitle: "Likes",
    count: "107",
    change: "19",
    logo: youtubeLogo,
    indicationIcon: downArrow,
    indicationType: "down",
  },
  {
    title: "youtube",
    subTitle: "Total Views",
    count: "1407",
    change: "12",
    logo: youtubeLogo,
    indicationIcon: downArrow,
    indicationType: "down",
  },
];

function App() {
  return (
    <React.Fragment>
      <header className="container header">
        <Header />
      </header>

      <main>
        <section className="container card-grid">
          {cardData.map((data: SummaryCardDataModel) => (
            <SummaryCard data={data} key={data.title} />
          ))}
        </section>

        <section className="container">
          <h2>Overview - Today</h2>
          <div className="card-grid">
            {overViewCardData.map(
              (data: OverviewCardDataModel, index: number) => (
                <TodayOverViewCard data={data} key={index} />
              )
            )}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
