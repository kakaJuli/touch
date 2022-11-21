import "./AvatarName.scss"




export function AvatarName ({image,children}) {
    return (
      <div className="AvatarName" >
         <i className="AvatarName-Image" >
         <img src={image} alt="" />
         </i>
         <span className="AvatarName-Text">{children}</span>
      </div>
    );
  };