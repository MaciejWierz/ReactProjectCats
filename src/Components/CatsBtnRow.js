import React from 'react'



class CatsBtnRow extends React.Component{





    render() {
        return(
           
                
            <div className="catfields-row">             
               {this.props.ids.first}
               {this.props.ids.second}
               {this.props.ids.third}
            </div>
            
        )
    }
}



export default CatsBtnRow