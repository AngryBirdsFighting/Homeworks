import React from "react";
const Statistical = ({statisticalData}) => {
    return(
        <ul className="statistics">
            <li>
                <div>
                    <i className="icon icon-cog"></i>
                    <span className="statistics-type">Building</span>
                    <span className="statistics-count">{statisticalData.building}</span>
                </div>
            </li>
            <li>
                <div>
                    <i className="icon icon-coffee"></i>
                    <span className="statistics-type">Idle</span>
                    <span className="statistics-count">{statisticalData.idle}</span>
                </div>
            </li>
            <li>
                <ul>
                    <li>
                        <span>ALL</span>
                        <span>{statisticalData.physical + statisticalData.virtual}</span>
                    </li>
                    <li>
                        <span>PHYSICAL</span>
                        <span>{statisticalData.physical}</span>
                    </li>
                    <li>
                        <span>VIRTUAL</span>
                        <span>{statisticalData.virtual}</span>
                    </li>
                </ul>
            </li>
        </ul>)
    }
export default Statistical;