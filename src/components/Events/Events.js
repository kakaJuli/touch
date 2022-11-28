import "./Events.scss";

import { EventItems } from "./EventItems/EventItems";
import { personData } from "../Events/personData";



export function Events () {

        const personList = personData.map(item => {
                return (
                        <EventItems
                                key = {item.id}
                                description = {item.description}
                        />
                )
        })

        return(
                <div className="eventItem">
                        
                        {personList}
                </div>
        )
}