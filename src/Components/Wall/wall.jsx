// import React, { useState,useEffect,useRef } from "react";
import React, { Component } from "react";
import Brick from "../Brick/Brick.jsx";
import "./style.css";


class Wall extends React.Component{

    constructor (props){
        super(props);
        this.myRef = React.createRef();
        this.state={
            bricks: [1,2,3],
            


        }
        

    }
   
    componentDidMount() {
        this.moveFocus(this.bricks);
      }

      moveFocus(i) {
         this.myRef.current=i;
        console.log(i)

        var name = document.getElementById(i);
        
          window.addEventListener('keyup', (event) => {
            
            if(event.keyCode === 46 ) {
                this.setState(({ bricks }) => ({
                    bricks: bricks.filter((brick) => i !== brick),
                }))
                
                
            }
                //a
            if(event.keyCode === 65 ){
            console.log(" press a to move block left")
                  }
                //s
            if(event.keyCode === 83 ){
                console.log(" press s to move block down")
                //name.style.top = (parseInt(name.style.top) - 30) + 'px';
            }
                //w
            if(event.keyCode === 87 ){
                console.log(" press w to move block up")
            }
                //d
            if(event.keyCode === 68 ){
                console.log(" press a to move block right")
            }

          });
        
      }



//function to delete the brick
    deleteRow = (id) => {
        this.moveFocus(id)
        console.log(id)
        this.setState(({ bricks }) => ({
            bricks: bricks.filter((brick) => id === brick),
        }))
      }
//function add more bricks to wall
    addMoreBricks = () =>{
        let l
        if(this.state.bricks.length===0){
            this.setState({

                bricks:[1]
            })
        }
        else{
         l=this.state.bricks[this.state.bricks.length-1];
        
        l++;
        let brick1=[...this.state.bricks];
        brick1.push(l);

        this.setState({

            bricks:[...brick1]
        })
        this.moveFocus(this.bricks)
    }

    }

    //override method
    //returns what is to be displayed to the html
     render = () =>{
    return (
        <div className="container">
            <h1>Generate New Boxes</h1>
            <div class="info">
            <p>To delete a brick </p>
            <ol>
                <li>click on brick</li>
                <li>press del button</li>
            </ol>
        </div>

        <div className="wall-container" ref={this.myRef} style={{top: 0, left: 0}}  >
           
        {this.state.bricks.map((brick) =>{
            return <Brick key={brick}   ondelete={this.deleteRow}  name= {brick} />;
        })
        }
        
        <button className="btn" onClick={this.addMoreBricks}>Add more</button>
    </div>
    </div>
    );

};

}

export default Wall;
