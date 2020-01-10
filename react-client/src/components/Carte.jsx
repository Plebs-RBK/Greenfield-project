import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Info from './Info.jsx'
import Rating from './Rating.jsx'
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
        physics : [] ,
        it : [] ,
        science : [] ,
        philosophy : [] ,
        geography : []
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
             <div key = {i} className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 vh-30 mw5-m' style = {{width:'200px'}} >
  <h1>{elm}</h1>
             <Info data={this.state.data[elm]}/>
             {/* <Rating /> */}
             </div>
           ))

         }
      </div>
    )
  }
}
export default Carte