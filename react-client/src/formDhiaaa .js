import React from "react";

class Form extends Component {
	constructor(props){
		super(props)

		this.state = {
		    firstName: "",
		    lastName: "",
		    category: "",
		    region: "",
		    phoneNumber: "",
		    price:''
	  	};
	  	this.change = this.change.bind(this)
	}

change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    $.post('/announce/add', this.state)
    .then(res => console.log(res))

  };


  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="Enter your first name"
          value={this.state.firstName}
          // onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Enter your last name"
          value={this.state.lastName}
          // onChange={e => this.change(e)}
        />
        <br />
        <input
          name="category"
          placeholder="category"
          value={this.state.category}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="region"
          placeholder="region"
          value={this.state.region}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="phoneNumber"
          placeholder="Enter your phoneNumber"
          // value={this.state.phoneNumber}
          onChange={e => this.change(e)}
        />
        <br />
         <input
          name="price"
          placeholder="Enter your price"
          // value={this.state.price}
          onChange={e => this.change(e)}
        />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
