import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Info from './Info.jsx'
class Carte extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data : {

      }
    }
  }
  async componentWillMount() {

   const data = await this.getData()
    this.setState({data})
    console.log(this.state)
  }
    async getData(){
      const data = {
        math : [] ,
        physique : [] ,
        informatique : [] ,
        science : [] ,
        phylo : [] ,
        geographie : []
      }
      for(var key in data) {
        await fetch(`/categorie/${key}`)
         .then(res => res.json())
         .then(result =>{
          data[key] = result;
          })
      }
      return data
    }


  render() {

    return (
       <div>
         {
           Object.keys(this.state.data).map((elm,i) => (
             <div key = {i}>
  <h1>{elm}</h1>
             <Info data={this.state.data[elm]}/>
             </div>
           ))

         }
      </div>
    )
  }
}
export default Carte