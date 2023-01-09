import React from "react";

const Menu = () => {
  return (
    <div className="menu-container" id="menu">
      <div className="header">
        <h4>Menu That Fits You Palatte</h4>
        <img src="./assets/spoon.png" alt="spoon" />
        <h1>Today's Special</h1>
      </div>
      <div className="menu-content">
        <div className="menu-left">
          <h3>Wine & Beer</h3>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Chapel Hill Shiraz</span>
              <div className="trait"></div>
              <span className="money-line">$56</span>
              <br />
            </div>
            <span className="info-menu">AU | Bottle</span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Catena Malbee</span>
              <div className="trait"></div>
              <span className="money-line">$59</span>
              <br />
            </div>
            <span className="info-menu">AR | Bottle</span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">La Vieille Rosé</span>
              <div className="trait"></div>
              <span className="money-line">$44</span>
              <br />
            </div>
            <span className="info-menu">CA | 750 ml</span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Rhino Pale Ale</span>
              <div className="trait"></div>
              <span className="money-line">$31</span>
              <br />
            </div>
            <span className="info-menu">CA | 750 ml</span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Irish Guineess</span>
              <div className="trait"></div>
              <span className="money-line">$26</span>
              <br />
            </div>
            <span className="info-menu">IE | 750 ml</span>
          </div>
        </div>
        <div className="img-menu">
          <img src="./assets/menu.png" alt="menu" />
        </div>
        <div className="menu-right">
          <h3>Cocktails</h3>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Aperol Sppritz</span>
              <div className="trait"></div>
              <span className="money-line">$20</span>
              <br />
            </div>
            <span className="info-menu">
              Aperol | Villa Marchesi prosecco | soda | 30ml
            </span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Dark 'N' Stormy</span>
              <div className="trait"></div>
              <span className="money-line">$16</span>
              <br />
            </div>
            <span className="info-menu">
              Dark rum | Ginger beer | Slice of lime.
            </span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Daiquiri</span>
              <div className="trait"></div>
              <span className="money-line">$10</span>
              <br />
            </div>
            <span className="info-menu">Rum | Citrus juice | Sugar</span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Old Fashioned</span>
              <div className="trait"></div>
              <span className="money-line">$31</span>
              <br />
            </div>
            <span className="info-menu">
              Bourbon | Brown sugar | Angostura Bitters
            </span>
          </div>
          <div className="side-content">
            <div className="detail-menu">
              <span className="title-line">Negroni</span>
              <div className="trait"></div>
              <span className="money-line">$26</span>
              <br />
            </div>
            <span className="info-menu">
              Gin | Sweet Vermouth | Campari | Orange garnish
            </span>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Menu;
