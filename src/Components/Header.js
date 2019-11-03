import React from 'react'
import headerImg from '../img/kot.jpg'


class Header extends React.Component{

    constructor(){
        super()
        this.state = {backgroundImage: `url(${headerImg})`}       
        //<img src = {headerImg}></img>
    }



    render() {
        return(
           
                
            <div className="header" style={this.state}>
               <label className="cats-label">Cats</label>

            </div>
            
        )
    }
}



export default Header