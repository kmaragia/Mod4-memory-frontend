import React from 'react';
import Cards from "./Cards"


class CardsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      allCards: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allCards:data
      })
    })
  }

  render(){
    return (
      <div>{this.state.allCards.map(card => {
        return <Cards card={card}/>
      }
      )
      }
       </div>
    )
  }
}

export default CardsContainer;
