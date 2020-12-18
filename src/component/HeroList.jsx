import React from "react";

const HeroList = (props) => {
  console.log(props);
  let hero = props.filteredHero.map((comic) => {
    return (
      <ul>
        <img
          src={comic.image.small_url}
          alt={comic.name}
          style={{ height: "30vh" }}
        />
        <li>
          <strong>SuperHero Name: </strong>
          {comic.name}
        </li>
        <li>
          <strong>Real Name: </strong>
          {comic.real_name}
        </li>
        <li>
          <strong>First Appeared: </strong>
          issue number: {comic.first_appeared_in_issue.id}-
          {comic.first_appeared_in_issue.name}
        </li>
      </ul>
    );
  });
  return <div>{hero}</div>;
};

export default HeroList;
