import React from "react";

import "./title-block.css";

const TitleBlock = () => {
    return (
        <div className="title-block">
            <div className="title">
                <div><img src="https://static.tildacdn.com/tild3161-3938-4332-b735-303133356637/logo_vertical.svg" alt="logo"/></div>
                <div><h1>Магазин свiдомого споживача</h1></div>
                <div className="title-descrip" id="cargo">Ecofriendly товари щоденного вжитку</div>
            </div>
        </div>
    )
}

export default TitleBlock;