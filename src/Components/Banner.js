import React from "react";
import '../Assets/Styles/Banner.css'
import img1 from "../Assets/Images/pexels-kássia-melo-12106929.jpg";
import img2 from "../Assets/Images/the1-removebg-preview.png"
export default class Banner extends React.Component {
    render() {
        return (
            <div className="new__item">
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>

        );
    }
}
