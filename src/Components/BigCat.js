import React from 'react'


class BigCat extends React.Component{




    render(){
        let style_1 = {}
        let data = {}
        if(this.props.visible){
             style_1 = {
                backgroundImage: this.props.url,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            };

            data = JSON.parse(this.props.data)
            let breedsArr= data.data.map(item => (item.breeds))
  
            data = breedsArr[0][0]      
            
        }
        
        return(


            !this.props.visible ? <div></div> : 

            <div className="bigcat-div">
                <div className="cat-div" style = {style_1}></div>
                <div className="stats-div"> 
                    <p><h4>Race: {data.name}</h4></p>
                    <p>Weight: {data.weight.metric} kg</p>
                    <p>Life span: {data.life_span} years</p>
                    <p>Child friendly: {data.child_friendly>3 ? "yes" : "no"}</p>
                    <p>Dog friendly: {data.dog_friendly>4 ? "yes" : "no"}</p>
                    <br /> 
                    <p> {data.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra est. Nunc in sagittis est. Nulla pharetra arcu odio, sed ultricies turpis blandit sit amet. Aenean aliquet, leo pulvinar varius mattis, nunc orci vulputate velit, vel ultricies magna ipsum in est. Praesent ullamcorper mollis orci. Nunc interdum mi id tincidunt porttitor. Mauris nec accumsan risus. Sed mattis fringilla dignissim. Aenean aliquet ipsum id erat pulvinar fringilla. Ut non mi libero. Ut quis sagittis elit. </p>
                    <p><a href={data.wikipedia_url}>more info...</a></p>
                </div>
            </div>


        )
    }
}



export default BigCat