import React, { useState, useEffect } from "react";
import { useFirestore } from "reactfire";

export default function Rating() {
  const [ratings, setRatings] = useState(null);

  const ratingsRef = useFirestore().collection("ratings");

  async function getEvents() {
    let ratingsArr = [];
    const ratingsQuery = ratingsRef.where("rating", "==", "5");
    const snapshot = await ratingsQuery.get();
    snapshot.forEach((doc) => ratingsArr.push(doc.data()));
    setRatings(ratingsArr);
    return ratings;
  }

  useEffect(() => {
    getEvents();
  }, []);

  function RatingItem(props) {
    return <li>{props.value.url}</li>;
  }

  function RatingsList(props) {
    console.log(props);
    const listItems = props.ratingsData.map((rate, index) => {
      return <RatingItem key={index} value={rate} />;
    });

    return <ul>{listItems}</ul>;
  }

  return ratings ? <RatingsList ratingsData={ratings} /> : "waiting";
}
