// Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadingTime = () => {
    const cups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    if (minutes < 30) {
      return `☕️`.repeat(cups) + ` ${minutes} min read`;
    } else {
      return `🍱`.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime()}</p>
    </article>
  );
}

export default Article;

