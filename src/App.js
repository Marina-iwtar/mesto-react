import Header from "./components/header";
import Main from "./components/main.js";
import Footer from "./components/footer";
import PopupWithForm from "./components/popupWithForm";
import ImagePopup from "./components/imagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard]= React.useState({});
 


  function popupAllClose(){
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
        onEditProfile = {setIsEditProfilePopupOpen}
        onAddPlace = {setIsAddPlacePopupOpen}
        onEditAvatar = {setIsEditAvatarPopupOpen}
        onCardClick = {setSelectedCard}
        />
        <ImagePopup
         onClose={popupAllClose}
         card = {selectedCard}        
        />
        <PopupWithForm
          name = "profile"
          title = "Редактировать профиль"
          textButtonSave = "Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={popupAllClose}
        >       
          <input
            type="text"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            id="name-input"
            name="name"
            //minlength="2"
            //maxlength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            className="popup__input popup__input_type_about-my"
            placeholder="О себе"
            id="aboutMy-input"
            name="about"
            //minlength="2"
            //maxlength="200"
            required
          />
          <span className="popup__input-error aboutMy-input-error"></span>
        </PopupWithForm>
        
        <PopupWithForm
          name = "mesto"
          title = "Новое место"
          textButtonSave = "Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={popupAllClose}
        >       
          <input
              type="text"
              className="popup__input popup__input_type_name-mesto"
              placeholder="Название"
              id="place-input"
              name="name"
              //minlength="2"
              //maxlength="30"
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
          name = "avatar"
          title = "Обновить аватар"
          textButtonSave = "Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={popupAllClose}
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
          name = "delete"
          title = "Вы уверенны?"
          textButtonSave = "Да"
          //isOpen={}
          onClose={popupAllClose}
        /> 
              
        <Footer />
      </div>
    </div>
  );
}

export default App;
