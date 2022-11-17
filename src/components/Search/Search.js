import "./Search.css";
import img from "./image/search.png"
//import * as Font from 'Google-font';


/*const fonts = () => Font.loadAsync({
  'gilroy': require('./assets/Quicksand-Medium.ttf')
})*/
const inputClick = () => console.log("Нажатие на инпут");
const mouseOver = () => console.log("Мышь ушла");
const change = (e) => console.log (e.target.value)
const btn = () => console.log ("нажата кнопка");

const search = "search"

export function Search() {
  return (
  
  <div className="search">

    
      <img className="imag" src={img}/>
    

    <input className="input" placeholder={search} onClick = {inputClick} onMouseEnter = {mouseOver}  onChange = {change}/>
    <button className="btn" onClick={btn} >+ New Upload</button>
  </div>
  
  )
};








