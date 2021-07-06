import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./sets-block.css";

const SetsItem = ({id, imageUrl, name, description, price}) => {

    const [changeImg, setСhangeImg] = useState(false);

    const activateHideImg = () => {
        setСhangeImg(true);
    }

    const deactivateHideImg = () => {
        setСhangeImg(false);
    }

    return (
        <div className="sets">
            <Link to={`/assortment-details/${id}`} key={id}>
                <div className="sets-item">
                    <div className="sets-img">
                        {!changeImg &&
                            <div onMouseEnter={activateHideImg}>
                                <img src={imageUrl[0]} alt="sets"/>
                            </div>
                        }
                        {changeImg &&
                            <div onMouseLeave={deactivateHideImg}>
                                <img src={imageUrl[1]} alt="sets"/>
                            </div>
                        }
                    </div>
                    <div className="sets-item-info">
                        <div className="sets-name">
                            <h1>{name}</h1>
                        </div>
                        <div className="sets-descr">
                            {description}
                        </div>
                        <div className="sets-price">
                            {price} грн.
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SetsItem;