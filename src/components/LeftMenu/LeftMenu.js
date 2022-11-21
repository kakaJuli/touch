import "./LeftMenu.scss";
import icon from "../../assets/Icons/colorfilter.png"
import image from "../../assets/Icons/Avatar.png"
import clock from "../../assets/Icons/clock.png"
import flash from "../../assets/Icons/flash-circle.png"
import teacher from "../../assets/Icons/teacher.png"
import login from "../../assets/Icons/login.png"
import { LogoName } from "./LogoName/LogoName";
import { AvatarName } from "./AvatarName/AvatarName";
import { MenuItem } from "./MenuItem/MenuItem"; 




export const LeftMenu = () => {

  let activeBar = null;
  return (
     <div className="LeftMenu"> 
         <LogoName icon={icon}>Teach.</LogoName>
         <AvatarName image={image}>Jone Cooper</AvatarName>
         <div className="Line"></div>
         <div className="MenuConteiner">
          <MenuItem onClick={active} image={flash}>Dashboard</MenuItem>
          <MenuItem onClick={active} image={clock}>My Schedule</MenuItem>
          <MenuItem onClick={active} image={teacher}>My Course</MenuItem>
          <MenuItem onClick={active} image={flash}>My Account</MenuItem>
       </div>
       <div className="ExitMenu">
          <MenuItem onClick={press} image={login}>My Account</MenuItem>
        </div>
      </div>
    );
    
  
  function press() {
    console.log("пользователь разлогинен");
    activeBar && activeBar.classList.remove('active');
  }
  function active(e) {
    activeBar ? activeBar.classList.remove('active'): activeBar = e.target;
    e.target.classList.add('active');
    activeBar = e.target;
  }
};
