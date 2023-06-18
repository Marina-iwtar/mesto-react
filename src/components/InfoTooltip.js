import imgRegistrYes from "../images/successfulRegistration.svg";
import imgRegistrNo from "../images/somethingWentWrong.svg";

function InfoTooltip({ title, isOpen, onClose, name, card }) {
  return (
    <div className={`popup popup_${name} ${card ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <div className="popup__container-image">
          <button
            className="popup__close popup__close_image"
            type="button"
            aria-label="кнопка закрытия модального окна"
            onClick={onClose}
          ></button>
          <img
            src={
              title === "Вы успешно зарегистрировались!"
                ? imgRegistrYes
                : imgRegistrNo
            }
            className="tooltip__image"
          />
        <p className="tooltipe__title">{title}</p>
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;

/*<img
src={
  title === "Вы успешно зарегистрировались!"
    ? imgRegistrYes
    : imgRegistrNo
}
className="tooltip__image"
/>
<p className="tooltipe__title">{title}</p>*/

/*<InfoTooltip
            title = "Что-то пошло не так! Попробуйте еще раз."
            image = {imgRegistrNo}
            onClose = {closeAllPopup}
          />
          <InfoTooltip
            title = "Вы успешно зарегистрировались!"
            image = {imgRegistrYes}
            onClose = {closeAllPopup}
          />

          <Route path="/mesto-react" element={loggedIn? <Navigate to = "/"/>:<Navigate to = "/sign-in"/>}/>*/
