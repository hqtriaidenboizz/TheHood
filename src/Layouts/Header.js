import axios from 'axios';
import React from 'react';
import '../Assets/Styles/Header.css';
export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='left__header'>
                    <div className='writer'>
                        <div className='avt'>
                            <img src="https://images.pexels.com/photos/5289698/pexels-photo-5289698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                        <div className='name'>Nigele share him secret for a delicious christmas</div>
                    </div>
                </div>
                <div className='mid__header'>
                    <div className="item_day">
                        <p>Tuesday 26-2-2022</p>
                    </div>
                    <div className="child__title">
                        <h4 className="child__title_item" >News<span >line</span></h4>
                    </div>
                    <div className="main__title">
                        <h1 className="main__title_item" >Week<span >end</span></h1>
                    </div>
                </div>
                <div className='right__header'>
                    <p>price rs 500</p>
                    <p>Pages 26 : new delhi </p>
                    <p>Benett coleman & co.ltd</p>
                    <p>est,:1890</p>
                </div>

            </div>
        );
    }
}
