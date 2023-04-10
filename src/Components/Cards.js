import React from "react";
import { CardData } from "./CardData";

function Card() {
  return (
    <div>
      {CardData.map((val, key) => {
        return (
          <div className="card" key={key}>
            <div className="top"></div>
            <h1>{val.title}</h1>
            <img src={val.image} alt={val.title} />

            <div className="bottom">
              <button
                onClick={() => new Audio(require(`./${val.soundBit}`)).play()}
              >
                PLAY
              </button>
              <button
                onClick={() => window.open(val.downloadURL, "_blank").focus()}
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
