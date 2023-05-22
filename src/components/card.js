import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div>
      <article className="element">
        <img
          src={card.link}
          alt={card.name}
          className="element__mask-group"
          onClick={handleClick}
        />
        <button
          className="element__delete"
          type="button"
          aria-label="кнопка удаления карточки"
        ></button>
        <div className="element__group">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like">
            <button
              className="element__vector"
              type="button"
              aria-label="кнопка лайк"
            ></button>
            <span className="element__counter">{[card.likes].length}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Card;
