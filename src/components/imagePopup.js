import React from "react";

function ImagePopup(card,{onClose}) {
  return (
    <div>
    <div className={`popup popup_image ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__content">
        <div className="popup__container_image">
          <button
            className="popup__close popup__close_image"
            type="button"
            aria-label="кнопка закрытия модального окна"
            onClick={onClose}
          ></button>
          <img src={card} alt={card.name} className="popup__image" />
          <h2 className="popup__title-image">{card.name}</h2>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ImagePopup;