import React from "react";
import HotNew from "../Components/HotNew";
import '../Assets/Styles/Content.css';
import New from "../Components/New";
export default  class Content extends React.Component {
    render() {
        return (
            <div id="Content">
                <div className="left__content">
                    <HotNew/>
                </div>
                <div className="right__content">
                    <New/>
                    <New/>
                    <New/>

                </div>
                
            </div>
        );
    }
}
