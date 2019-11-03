import React from 'react'
import axios from 'axios'
import CatContainer from './CatContainer'

class CatComponent extends React.Component{
constructor(){
    super();

    this.state = { data: {}, loading: false};

}

componentDidMount(){


    const url= "https://api.thecatapi.com/v1/images/search?breed_ids="+this.props.id;
    axios.get(url,
        {
            headers:
            {"x-api-key": "73835b19-ca6e-480d-9175-56f876797d84"}
        })
    .then((data) => {
           this.setState({
             loading: true,
             data: data.data
           }); 
        });

    }



render(){
    let imgUrl="";
    let name="";
    let id = "";
    if(this.state.loading){
        imgUrl = this.state.data.map(item => ( item.url));
        name = this.state.data.map(n => ( n.breeds[0].name));
        id = this.state.data.map(n => ( n.breeds[0].id));

       // console.log(JSON.stringify(this.state))
    }
    
    return(
    !this.state.loading ? 
    <div className= "img-container">
        <img src="/static/media/loading.7c1ec8a2.gif" alt = "loading" className="app-loading-img"/> 
    </div>
    
    :
    
    

        <CatContainer img = {imgUrl}
          name = {name}
          handler = {this.props.handler}
          id = {id}
          enable = {this.props.enable}
          data = {JSON.stringify(this.state)}/>

    )
}


}


export default CatComponent