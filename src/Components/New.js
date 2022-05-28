import React from "react";
import '../Assets/Styles/New.css'
export default class New extends React.Component {
    render() {
        return (
            <div id="New">
                <div className="left">
                    <div className="img">
                        <img src="https://images.pexels.com/photos/575433/pexels-photo-575433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="img_item" />
                    </div>
                    <div className="title">
                        <h3>
                            The Best Street Style Photos From the Resort 2023 Destination Shows
                        </h3>
                    </div>
                </div>
                <div className="right">
                    <div className="detail">
                        <p>From G-Dragon at the Chanel cruise show in Monaco to the Apatow family at Louis Vuitton’s show in San Diego, the A-listers are not only turning up for the season’s biggest resort shows, but bringing their A game as well. Our street style snappers are there to document the stars and the styles, including precious pearls, lavish logos, and head-to-toe opulence. Scroll through our coverage below and be sure to check back all month long as Vogue reports on resort 2023.</p>
                    </div>
                </div>

            </div>
        );
    }
}
