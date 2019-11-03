import React from 'react'


class CatContainer extends React.Component{


render(){

    const style_1 = {
        backgroundImage: 'url('+this.props.img+')',
        backgroundPosition: 'center center',
        height: "90%",
        width: "100%",
        backgroundSize: 'cover',
    };

    return(

        <div className={this.props.enable==="true" ? "img-container" :  "img-container-no-hover"} >

            <input type="button" style={style_1} 
            onClick={this.props.handler} 
            id={this.props.data} 
            name ={style_1.backgroundImage}
            
            /> 

            {this.props.name}

        </div>

    )
}

}

export default CatContainer