function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__container">
        <p className="techs__subtitle">7 технологий</p>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item"><p className="techs__text">HTML</p></li>
          <li className="techs__item"><p className="techs__text">CSS</p></li>
          <li className="techs__item"><p className="techs__text">JS</p></li>
          <li className="techs__item"><p className="techs__text">React</p></li>
          <li className="techs__item"><p className="techs__text">Git</p></li>
          <li className="techs__item"><p className="techs__text">Express.js</p></li>
          <li className="techs__item"><p className="techs__text">mongoDB</p></li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
