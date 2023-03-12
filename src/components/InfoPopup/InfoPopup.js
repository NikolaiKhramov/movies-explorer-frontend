import success from '../../images/Success.svg';
import fail from '../../images/Fail.svg';

function InfoPopup({ onClose, isOpen, popupSettings, onOverlayClick }) {

  const visibilityState = isOpen ? 'popup_opened' : '';

  const statusImage = popupSettings.isSuccess ? success : fail;
  const statusText = `${popupSettings.message}`

  return (
    <div className={`popup popup_context_confirm-place-deletion ${visibilityState}`} onClick={onOverlayClick}>
      <div className="popup__container tooltip">
        <button type="button" className="popup__close-btn" onClick={onClose}></button>
        <img className="tooltip__image" src={isOpen ? statusImage : undefined} alt="Картинка статуса регистрации"></img>
        <h2 className="popup__purpose tooltip__text">{statusText}</h2>
      </div>
    </div>
  )
}

export default InfoPopup;
