import "./MenuItem.scss"




export function MenuItem ({image,children,onClick}) {

    return (
      <button className="MenuItem" onClick={onClick}>
         <div  className="Bar"></div>
         <i className="MenuItem-Image" >
         <img src={image} alt="" />
         </i>
         <span className="MenuItem-Text">{children}</span>
      </button>
    );
  };