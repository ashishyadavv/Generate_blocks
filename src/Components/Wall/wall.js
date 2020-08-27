import React from 'react';
import Brick from '../Brick/Brick.js';
import './style.css';


class Wall extends React.Component{
    
    
    
    constructor (props){
        super(props);
        this.state={
            bricks: [1,2,3,4,5,6,7]
             
        }

    }

    addMoreBricks = () =>{
        let l=this.state.bricks[this.state.bricks.length-1];
        l++;
        let brick1=[...this.state.bricks];
        brick1.push(l);

        this.setState({
           
            bricks:[...brick1]
        })
        

    }
    
    
    //override method
    //returns what is to be displayed o the html
     render = () =>{
    return (
        
        <div className="wall-container">
        {this.state.bricks.map((brick) =>{
            return <Brick key={brick}  name= {brick} />;
        })
        }
        <button className="btn" onClick={this.addMoreBricks}>Add more</button>
    </div>
    );
    

};


}

export default Wall;