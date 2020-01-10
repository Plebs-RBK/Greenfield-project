import React from 'react'
import $ from "jquery";
class Rating extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      rating:0,
      count:0
    }
    this.handleChange= this.handleChange.bind(this)
    // this.handleChange1 = this.handleChange1.bind(this)
  }
  ComponentWillMount(){
    fetch(`/categorie/`, { method: 'POST',
    body: JSON.stringify(data),
    headers:{ 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))

   }

  handleChange(e) {
    // console.log(e.target.innerText)
    document.querySelectorAll('.circle').forEach(elm => {
      elm.style.backgroundColor = ''
    })
    let i = 1
      while(i <= parseInt(e.target.id)){
        document.getElementById(`${i}`).style.backgroundColor = 'gold'
        i++
      }
    this.setState({
          rating: e.target.innerText,
          count: 1
        })
  }
//   async handleChange1(e){
//     if(this.state.count === 1) {
//       e.target.style.backgroundColor =''
//     await  this.setState({
//         rating: 0,
//         count: 0
//       })
//     console.log('hi')
// }
//   }
  render(){
    return(
      <div style={{diplay:'grid'}}>
        <div id='1' className='circle' onClick={this.handleChange}>1</div>
        <div id='2' className='circle' onClick={this.handleChange}>2</div>
        <div id='3' className='circle' onClick={this.handleChange}>3</div>
        <div id='4' className='circle' onClick={this.handleChange}>4</div>
        <div id='5' className='circle' onClick={this.handleChange}>5</div>
        <div>{this.state.rating}</div>
      </div>
    )
  }
}
export default Rating