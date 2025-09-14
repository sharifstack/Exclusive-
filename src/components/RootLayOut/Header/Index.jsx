import React from "react";

const Header = () => {
  return (
    <div className="bg-Text2_000000 py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <div></div>
          <div className="text-text_FAFAFA font-poppins text-sm font-normal">
            <h2>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>
          </div>
          <div>
            <select className="bg-transparent text-text_FAFAFA font-poppins text-sm font-normal">
              <option value="En">English</option>
              <option value="Bn">Bangla</option>
              <option value="Ger">Germany</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
