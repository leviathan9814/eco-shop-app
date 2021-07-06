import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import "./cargo-block.css";



const CargoItem = ({id, imageUrl, name, price}) => {

    const [changeImg, setСhangeImg] = useState(false);

    const activateHideImg = () => {
        setСhangeImg(true);
    }

    const deactivateHideImg = () => {
        setСhangeImg(false);
    }

    // const ImgHide = styled.div`
    //     width: 260px;
    //     height: 260px;
    //     content: url(${imageUrl[0]});
    //     &:hover {
    //         content: url(${imageUrl[1]});
    //     }
    // `;



    return (
        <>
            <Link to={`/cargo-details/${id}`} key={id}>
                <div className="cargo-item">
                    <div className="cargo-img">
                        {!changeImg &&
                            <div onMouseEnter={activateHideImg}>
                                <img src={imageUrl[0]} alt="cargo"/> 
                            </div>
                        }
                        {changeImg &&
                            <div onMouseLeave={deactivateHideImg}>
                                <img src={imageUrl[1]} alt="cargo"/> 
                            </div>     
                        } 
                        {/* <ImgHide/> */}
                    </div>      
                    <div className="cargo-name">
                        <h1>{name}</h1>
                    </div>
                    <div className="cargo-price">
                        {price} грн.
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CargoItem;