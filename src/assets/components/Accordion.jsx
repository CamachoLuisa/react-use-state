import { useState } from "react";

export default function Accordion(props) {

    const [isOpen, setIsopen]= useState(false);
    function toggleOpen(){
        setIsopen(!isOpen)
    }

    return (
        <div className="accordion">
            <div className="accordion_title">
                <h3>{props.title}</h3>
                <button className="accordion_btn" 
                 onClick={() => setIsopen((current) => !current)}>
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && <div>{props.content}</div>}
        </div>
    );
}