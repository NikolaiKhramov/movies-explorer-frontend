function Aboutproject() {
  return (
    <section className="project" id="aboutproject">
      <h2 className="project__title"> О проекте</h2>
      <div className="project__container">
        <div className="project__description project__description_type_stages">
          <p className="project__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__description project__description_type_duration">
          <p className="project__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__timebar timebar">
        <p className="timebar__duration timebar__duration_type_backend">1 неделя</p>
        <p className="timebar__duration timebar__duration_type_frontend">4 недели</p>
        <span className="timebar__text">Back-end</span>
        <span className="timebar__text">Front-end</span>
      </div>
    </section>
  )
}

export default Aboutproject;
