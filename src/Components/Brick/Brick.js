import React from 'react';

import './style.css';

// fucntional Component

const Brick = (props) =>{
    return(
        <div className="brick-cont">
            {
                props.name
            }

        </div>
    )
}



export default Brick;