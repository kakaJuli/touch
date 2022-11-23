import "./Search.scss";
import { SearchButton } from "./SearchButton";
import { SearchIcon } from "./SearchIcon/SearchIcon";
import { SearchInput } from "./SearchInput";
/*import img from "./image/search.png"*/



export function Search() {

  const handleClick = () => {
    console.log('нажата кнопка');
  }

  const inputClick = () => {
    console.log('нажатие на инпут');
  }

  const mouseOver = () => {
    console.log ('мышь ушла');
  }

  const change = (e) => {
    console.log (e.target.value);
  }

  const search = 'search';

  return (
    <div className="Search">
      <SearchIcon />
      <SearchInput placeholder={search} onClick = {inputClick} onMouseEnter = {mouseOver} onChange = {change}/>
      <SearchButton onClick = {handleClick}>
        + New Upload
      </SearchButton>
    </div>
  )
}
 





