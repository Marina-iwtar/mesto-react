import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={handleCardClick}
        />
        <ImagePopup onClose={closeAllPopup} card={selectedCard} name="image" />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          textButtonSave="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
        >
          <input
            type="text"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            id="name-input"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            className="popup__input popup__input_type_about-my"
            placeholder="О себе"
            id="aboutMy-input"
            name="about"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error aboutMy-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="mesto"
          title="Новое место"
          textButtonSave="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
        >
          <input
            type="text"
            className="popup__input popup__input_type_name-mesto"
            placeholder="Название"
            id="place-input"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error place-input-error"></span>
          <input
            type="url"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            id="link-input"
            name="link"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          textButtonSave="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <input
            type="url"
            className="popup__input popup__input_type_url"
            placeholder="Ссылка на картинку"
            id="url-input"
            name="avatar"
            required
          />
          <span className="popup__input-error url-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete"
          title="Вы уверенны?"
          textButtonSave="Да"
          //isOpen={}
          onClose={closeAllPopup}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
