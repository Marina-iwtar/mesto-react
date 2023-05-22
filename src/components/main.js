import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((profileUserInfo) => {
        setUserName(profileUserInfo.name);
        setUserDescription(profileUserInfo.about);
        setUserAvatar(profileUserInfo.avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));

    api
      .getInitialCards()
      .then((dataCards) => {
        setCards(
          dataCards.map((data) => ({
            name: data.name,
            link: data.link,
            alt: data.name,
            likes: data.likes,
            cardId: data._id,
          }))
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
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
        {cards.map(({cardId, ...props}) => (
            <Card key={cardId} {...props}
              onCardClick = {onCardClick}
            />
        ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
