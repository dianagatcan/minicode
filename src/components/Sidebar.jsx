import "../styles/components/Sidebar.scss";
import Media from "./utils/Media";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__item">
        <Media name="lang" />
        <div className="sidebar__lang">
          <p>Рус</p>
          <hr></hr>
          <p>Eng</p>
        </div>
      </div>
      <hr></hr>
      <div className="sidebar__item">
        <Media name="phone" />
        <p>Sună</p>
      </div>
      <hr></hr>
      <div className="sidebar__item">
        <Media name="messenger" />
        <p>Messenger</p>
      </div>
      <hr className="last"></hr>
      <div className="sidebar__item">
        <Media name="whatsapp" />
        <p>Whatsapp</p>
      </div>
    </section>
  );
};

export default Sidebar;
