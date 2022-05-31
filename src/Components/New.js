import React from "react";
import '../Assets/Styles/New.css'
export default function New (props) {
   
        return (
            <div id="New">
                <div className="left">
                    <div className="img">
                        <img src={props.image} alt="" className="img_item" />
                    </div>
                    <div className="title">
                        <h3>
                        {props.title}
                        </h3>
                    </div>
                </div>
                <div className="right">
                    <div className="detail">
                        <p>{props.detail}</p>
                    </div>
                </div>

            </div>
        );
    
}
