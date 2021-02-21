import React from 'react';

import './style.css';

// fucntional Component


const Brick = (props) =>{
    
    // function del(){
    //     var id=props.name
    //     console.log(id)
        
    // }
    

    return(
        
        <div className="brick-cont" id={props.name} onClick={()=>props.ondelete(props.name)} style={{top: 0, left: 0}}  >
            {
                props.name
            }

        </div>
    )
}



export default Brick;