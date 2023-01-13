import "../styles/components/sidebar.sass";
import InformationContainer from "./informationContainer";
import SocialNetworks from "./SocialNetworks";
//import Avatar from "../../public/img/eu.jpg"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src="../../public/img/eu.jpg" alt="Washington Batista" />
      <p className="title">Desenvolvedor full stack</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
  
};

export default Sidebar
