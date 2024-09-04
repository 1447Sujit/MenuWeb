import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../Context/AppContext";

const Cards = () => {

  const { cardsDetails , category} = useContext(AppContext)

  const filteredCardDetails = category === "All" ? cardsDetails : cardsDetails.filter(card => card.category === category);

  return (
    <div className="cardContainer">
      {filteredCardDetails.map((cardDetail) => (
        <Card key={cardDetail.id} cardDetail={cardDetail} />
      ))}
    </div>
  );
};

export default Cards;
