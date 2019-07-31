import React from 'react'
import { Route, Redirect } from 'react-router'

class HomePage extends React.Component{
  constructor() {
    super()
    this.state = {
      redirect: false
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      redirect: true
    })
  }

 render(){
   return(

     <div>
       {this.state.redirect?<Redirect to="game"/>:(
        <button type="button"class="block"onClick = {this.handleClick}>Level 1</button>
        )}
     </div>
   )
 }
}

export default HomePage;
