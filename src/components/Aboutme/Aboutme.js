import photo from '../../images/studentphoto.png';

function Aboutme() {
  return (
    <div className="student">
      <h2 className="student__title">Студент</h2>
      <div className='student__container'>
        <div className='student__info'>
          <p className="student__name">Виталий</p>
          <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="student__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/" target="_blank" className="student__link">Github</a>
        </div>
        <img src={photo} alt="Фото студента" className="student__photo"/>
      </div>
    </div>
  )
}

export default Aboutme;
