import React from 'react';
import CatComponent from './Components/CatComponent'
import Header from './Components/Header'
import CatsBtnRow from './Components/CatsBtnRow'
import MyFoot from './Components/Footer';
import BigCat from './Components/BigCat';

class App extends React.Component {
  
constructor(){
  super();

  this.state = {  data: {},
                  loaded: false,

                };
  this.handleMiniCatOnClick = this.handleMiniCatOnClick.bind(this);
  this.handleAppOnClick = this.handleAppOnClick.bind(this);
}

componentDidMount(){


  const url= "https://api.thecatapi.com/v1/breeds";///search?breed_ids=beng


  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      loaded: true,
      data: data,
      selected: false,
      selectedData:{}
    }); 
  })

}
handleMiniCatOnClick(event){
 if(!this.state.selected){
      let url = event.target.name
      let data = event.target.id


      this.setState(prevState =>{
        return{
        ...prevState,
        selected: true,
        selectedData: {
        backgroundImage: url,
        data: data
          }
        }
    })

  }
}




handleAppOnClick(event){
  if(this.state.selected){
    this.setState(prevState =>{
      return{
      ...prevState,
      selected: false,
      selectedData: {}
      }
  })
  
  }
}



  render(){ 

    let idList = [];
    let listsList = [];
    let rowsList = [];
    let i=0;
    let selectedStyle = {}

    if(this.state.loaded ){
      idList = this.state.data.map(item =>( <CatComponent id={item.id} handler={this.handleMiniCatOnClick} enable = {this.state.selected ? "false" : "true"}/> ));

      for(i=0;i<idList.length;i++){
        if(i%3===0) listsList.push({
          first:idList[i],
          second:idList[i+1],
          third:idList[i+2]
        })

      }
     
      rowsList = listsList.map(item =>( <CatsBtnRow ids = {item} key ={ Math.random()} />));

    }

    if(this.state.selected){
        selectedStyle = {
          opacity: 0.1,
          cursor: "pointer"
    };
      
    }

            return (
            !this.state.loaded ? 
              <div className="app-loading">
                <img src="/static/media/loading.7c1ec8a2.gif" alt = "loading" className="app-loading-img"/>
              </div> 
              
              :

            <div>
                <BigCat url = {this.state.selectedData.backgroundImage}
                 data={this.state.selectedData.data} 
                 visible = {this.state.selected}
                 handler={this.handleBigCatOnClick}
                 />


                <div style={selectedStyle} onClick={this.handleAppOnClick}>
                  
                  <Header/>
                  {rowsList}
                  <MyFoot/>
                
        
                </div> 
            </div>

          );
    }
}

export default App;
