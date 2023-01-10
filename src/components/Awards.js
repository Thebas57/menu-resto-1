import React from "react";

const Awards = () => {
  return (
    <div className="awards-container" id="awards">
      <div className="awards">
        <h4>Awards & recognition</h4>
        <img src="./assets/spoon.png" alt="spoon" className="spoon" />
        <h1>Our Laurels</h1>
        <div className="laurels">
          <div className="detail-laurel">
            <img src="./assets/award01.png" alt="laurel1" />
            <div>
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="detail-laurel">
            <img src="./assets/award05.png" alt="laurel1" />
            <div>
              <h3>Rising star</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="detail-laurel">
            <img src="./assets/award02.png" alt="laurel1" />
            <div>
              <h3>AA Hospitality </h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="detail-laurel">
            <img src="./assets/award03.png" alt="laurel1" />
            <div>
              <h3>Outstanding Chef</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img">
        <img src="./assets/laurels.png" alt="laurels" />
      </div>
    </div>
  );
};

export default Awards;
