import "../styles/components/Footer.scss";
import Media from "./utils/Media";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="about">
          <Media name="white-logo" />
          <p>
            Dezvoltarea companiei MINICODE a fost determinată în mare parte de
            flexibilitatea soluțiilor și ofertelor, adaptivitații față de
            cerințele pieții și cerințelor clienților
          </p>
          <button>Comandă apel</button>
        </div>
        <div className="company">
          <p className="title">Companie</p>
          <ul>
            <li>Produse de asigurare</li>
            <li>Caz asigurat</li>
            <li>Noutăți</li>
            <li>Carieră</li>
            <li>Oferte</li>
            <li>Întrebări</li>
          </ul>
        </div>
        <div className="contacts">
          <p className="title">Contacte</p>
          <div>
            <p>+373 69 845 825</p>
            <p>+373 22 824 845</p>
            <p>mun. Chișinău,</p>
            <p>str. București, 101</p>
          </div>
        </div>
        <div className="media">
          <p className="title">Social media</p>
          <div>
            <Media name="w-viber" />
            <Media name="w-whatsapp" />
            <Media name="w-fb" />
            <Media name="w-telegram" />
            <Media name="w-instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
