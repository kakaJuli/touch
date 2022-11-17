import "./Home.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import {Search} from "../../components/Search";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <Search />
    </div>
  );
};
