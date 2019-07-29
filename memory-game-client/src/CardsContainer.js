import React from 'react';
import Cards from "./Cards"


class CardsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      allCards: [],
      twoCards: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(allKittens => {
      let randomKittenOrder = this.randomOrder([...allKittens, ...allKittens])
      this.setState({
        allCards: randomKittenOrder
      })
    })
  }

  compareCards = () => {
    if (this.state.twoCards[0].id === this.state.twoCards[1].id ){
      alert("one Point")
    }
  }

  flipCard = (card) =>{

      this.setState({
        twoCards:[...this.state.twoCards,card]
      }, () => {
        console.log(this.state.twoCards.length)
        console.log(this.state.twoCards[0])
           if (this.state.twoCards.length === 2){
                this.compareCards()
        }
      })

//    if (this.state.twoCards.length === 2){
//         this.compareCards()
// }
  }

  randomOrder = (allKittens) => {
    let kittensArray = allKittens
    var currentIndex = kittensArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = kittensArray[currentIndex];
      kittensArray[currentIndex] = kittensArray[randomIndex];
      kittensArray[randomIndex] = temporaryValue;
    }

    return kittensArray;
  }

  render(){
    return (
      <div>
        <div className="ui four column grid">
          <div className="row">
            {this.state.allCards.map(card => {
                return (
                <Cards
                key={card.index}
                card={card}
                flipCard={this.flipCard}
                />
                )
          })
          }
          </div>
        </div>
       </div>
    )
  }
}

export default CardsContainer;
