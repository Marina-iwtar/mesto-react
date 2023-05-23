import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserData()]).then(
      ([cards, usInfo]) => {
        setCards(cards);
        setUserName(usInfo.name);
        setUserDescription(usInfo.about);
        setUserAvatar(usInfo.avatar);
      }
    );
  }, []);

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button
              className="profile__pencil"
              type="button"
              aria-label="кнопка смены аватара"
              onClick={() => {
                onEditAvatar(true);
              }}
            >
              <img src={userAvatar} alt="аватар" className="profile__avatar" />
            </button>
            <div className="profile-info">
              <div className="profile-info__container">
                <h1 className="profile-info__title">{userName}</h1>
                <button
                  className="profile-info__edit-button"
                  type="button"
                  aria-label="кнопка редактирования"
                  onClick={() => {
                    onEditProfile(true);
                  }}
                ></button>
              </div>
              <p className="profile-info__paragraph">{userDescription}</p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="кнопка добавления карточки"
            onClick={() => {
              onAddPlace(true);
            }}
          ></button>
        </section>

        <div className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
