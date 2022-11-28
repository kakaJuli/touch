import "./EventItems.scss";


export const EventItems = props => {
    return (
        <div className="cards">
            <div className="logo">
                
            </div>

            <div className="description">

                <p>{props.description}</p>

            </div>
            <div className="person">
                <button>huy</button>
            </div>
        </div>
    )
}