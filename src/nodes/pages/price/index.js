import React from "react";
import "../../../assets/styles/pages/price.scss";
import priceBg from "../../pages/price/img/back_texture.png";
import discover from "../../pages/price/img/discover.svg";
import masterCard from "../../pages/price/img/master_card.svg";
import visa from "../../pages/price/img/visa.svg";

export default () => {

    return (
        <div className="price" style={{backgroundImage: `url(${priceBg})`}}>
            <div className="price-container">
                <h2>PRICE</h2>
                <p>Satisfaction guaranteed</p>

                <div className="price-content">
                    <div className="payment">
                        <div><img src={discover} alt=""/></div>
                        <div><img src={visa} alt=""/></div>
                        <div><img src={masterCard} alt=""/></div>
                    </div>
                    <div className=" price-pic">
                        <div className="circle">
                            <h2>2.99$</h2>
                        </div>
                        <div className={"circle-bottom"}>
                            <a href="">check it out</a>
                        </div>
                    </div>
                    <div className="btn">
                        <button>start free trial</button>
                    </div>
                </div>

            </div>
        </div>
    )
}