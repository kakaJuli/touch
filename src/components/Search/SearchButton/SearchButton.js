import "./SearchButton.scss"

export function SearchButton ({children, ...props}) {
    return (
        
        <button className="SearchButton" {...props}>
        
        <span className="SearchButton-text">{children}</span>
        </button>

        
    )
}