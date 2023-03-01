import Aboutme from "../Aboutme/Aboutme";
import arrowIcon from "../../images/arrow_icon.svg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Aboutme />
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list projects">
        <li className="projects__item">
          <a href="https://github.com/" target="_blank" className="projects__link">
            Статичный сайт <img src={arrowIcon} alt="Иконка стрелочки" className="portfolio__arrow-icon"/>
          </a>
        </li>
        <li className="projects__item">
          <a href="https://github.com/" target="_blank" className="projects__link">
            Адаптивный сайт <img src={arrowIcon} alt="Иконка стрелочки" className="portfolio__arrow-icon"/>
          </a>
        </li>
        <li className="projects__item">
          <a href="https://github.com/" target="_blank" className="projects__link">
            Одностраничное приложение <img src={arrowIcon} alt="Иконка стрелочки" className="portfolio__arrow-icon"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
