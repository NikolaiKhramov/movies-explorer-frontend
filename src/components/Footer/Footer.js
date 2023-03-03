function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020{/*new Date().getFullYear()*/}</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/" target="_blank" className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
