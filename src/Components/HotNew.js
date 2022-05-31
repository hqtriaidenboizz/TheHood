import React from "react";
import '../Assets/Styles/HotNew.css'
export default function HotNew (props){
        return (
            <div id="hot__New">
                <div className="title">
                    <h1 className="title__item">
                        {props.title}
                    </h1>
                </div>
                <div className="detail">
                    <div>
                        <p className="detail__item">
                        {props.detail}
                        </p>
                    </div>
                    <div>
                        <img src={props.image} alt="" />
                    </div>

                </div>

            </div>
        );
}
