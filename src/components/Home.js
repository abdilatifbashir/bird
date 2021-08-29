import React from 'react'
import "../styles/home.css"
import About from './About'
import {Link} from "react-router-dom"


export default function Home() {

    const btnStyle={
        display:"block",
        
         paddingBottom:"5px",
        
        border:"3px solid black",
        width:"300px",
          bordeSspacing: "15px",
          textAlign:"center"


    }
    const titleStyle = {
        textAlign:"center",
        marginLeft:"20px"
    }
    const footStyle = {
        
          background: "linear-gradient(to bottom left, white 50%, black 50%)",
        
        height:"688px"
    }
    const linkStyle = {
        
         textDecoration: "none",

    }
    return (
        <div className="container-1">
        <div className="left-section"></div>
        <div className="main-section">
        <About />
        <div className="container" style={{marginTop:"80px",}}>
        
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4">
        <span style={titleStyle}> Craft my Clothes</span>
       <Link to={"/join"} style={linkStyle }><span style={btnStyle} >Customer</span></Link>
        </div>

        </div>

        

        <div style={footStyle}></div>
        </div>
        <div className="right-section">
        </div>
            
        </div>
    )
}
