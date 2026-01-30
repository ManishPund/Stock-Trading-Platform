import React from "react";
import UniverseProduct from "./UniverseProduct";

const Universe = () => {
  const universeProduct = [
    {
      href: "https://www.zerodhafundhouse.com/",
      img: "media/images/zerodhaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      href: "https://sensibull.com/",
      img: "media/images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      href: "https://www.tijorifinance.com/",
      img: "media/images/tijori.svg",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      href: "https://streak.tech/",
      img: "media/images/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      href: "https://smallcase.zerodha.com/",
      img: "media/images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      href: "https://zerodha.com/static/images/products/ditto-logo.png",
      img: "media/images/dittoLogo.png",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section className="container p-lg-5 p-2 my-5">
      <div className="row text-center">
        <h1 className="fs-4"> The Zerodha Universe</h1>
        <p className="my-3  text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        {universeProduct.map((product, index) => (
          <div className="col-lg-4 col-md-6 mb-5 p-3" key={index}>
            <UniverseProduct {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Universe;
