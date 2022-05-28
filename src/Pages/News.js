import '../Assets/Styles/News.css'
import React from "react";
import Header from "../Layouts/Header";
import Banner from '../Components/Banner.js';
import Content from '../Layouts/Content';
export default class News extends React.Component {
    render() {
        return (
            <div id="new">
                <Header/>
                <Banner/>
                <Content/>
            </div>
        );
    }
}
