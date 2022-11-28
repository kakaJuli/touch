
import "./Home.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import {Search} from "../../components/Search";
import { LeftMenu } from "../../components/LeftMenu/LeftMenu";
import { Events } from "../../components/Events/";




export const Home = () => {
  return (
    
    <div className="Home">

      <Header />
      <Menu />
      <Search />
      <LeftMenu />
      <Events/>
      
    
    </div>
  );
};
