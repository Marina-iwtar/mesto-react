import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserData()])
      .then(([cards, res]) => {
        setCards(cards);
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);

  function handleUpdateUser(card) {
    api
      .editProfile(card)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopup();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }
   
  function handleUpdateAvatar(card){
   api.editAvatar(card)
   .then((res) => {
    setCurrentUser(res);
    closeAllPopup();
  })
  .catch((err) => console.log(`Ошибка ${err}`));
}
  function handleUpdateMesto(card){
   api.addNewCard(card.name, card.link)
   .then((newCard)=>{
    setCards([newCard, ...cards]); 
    closeAllPopup();
   })
   .catch((err) => console.log(`Ошибка ${err}`));
  }



  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api
        .likeCard(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((err) => console.log(`Ошибка ${err}`));
    } else {
      api
        .dislikeCard(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  }
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }

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
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={setIsEditProfilePopupOpen}
            onAddPlace={setIsAddPlacePopupOpen}
            onEditAvatar={setIsEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <ImagePopup
            onClose={closeAllPopup}
            card={selectedCard}
            name="image"
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopup}
            onUpdateUser={handleUpdateUser}
          />

         <AddPlacePopup
           isOpen={isAddPlacePopupOpen}
           onClose={closeAllPopup}
           onAddPlace = {handleUpdateMesto}/>

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopup}
            onUpdateAvatar = {handleUpdateAvatar}
          />

          <PopupWithForm
            name="delete"
            title="Вы уверенны?"
            textButtonSave="Да"
            //isOpen={}
            onClose={closeAllPopup}
          />

          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
