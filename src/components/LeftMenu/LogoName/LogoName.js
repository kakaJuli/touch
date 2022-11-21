import "./LogoName.scss";


export function LogoName ({icon,children}) {
    return (
      <div className="LogoName" >
      <i className="LogoName-Icon" >
        <img src={icon} alt="" />
      </i>
      <span className="LogoName-Text">{children}</span>
      </div>
    );
  };