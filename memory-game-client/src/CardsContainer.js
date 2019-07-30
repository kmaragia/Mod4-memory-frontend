import React from 'react';
import Cards from "./Cards"
import debounce from 'lodash/debounce'


class CardsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      allCards: [],
      twoCards: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(allKittens => {
        var kittens = allKittens.map(kitten => {
        return {...kitten, show:false}
      })
      let kittensCopy = allKittens.map(kittenC => {
        return {...kittenC, show: false, id: `copy-${kittenC.id}`}
      })
      let randomKittenOrder = this.randomOrder([...kittens, ...kittensCopy])
      this.setState({
        allCards: randomKittenOrder
      })
    })
  }

  compareCards = () => {
    let updateCards = this.state.allCards.map(oldCard =>{
      if (oldCard.card_image === this.state.twoCards[0].card_image){
        return {...oldCard, show:false}
      }
      if (oldCard.card_image === this.state.twoCards[1].card_image){
        return {...oldCard, show:false}
      }
      else {
        return oldCard
      }
    })

    let trueCards = this.state.allCards.map(oldCard =>{
      if (oldCard.card_image === this.state.twoCards[0].card_image){
        return {...oldCard, show:true}
      }
      if (oldCard.card_image === this.state.twoCards[1].card_image){
        return {...oldCard, show:true}
      }
      else {
        return oldCard
      }
    })

    if (this.state.twoCards[0].card_image === this.state.twoCards[1].card_image){

      this.setState({
        twoCards:[],
        allCards:trueCards
      })
    }
    else{
      setTimeout(() => {
      this.setState({
        allCards: updateCards,
        twoCards:[]
      })
    },2000)
    }
  }

  flipCard = (card) => {
    let updateCards;
    if (this.state.twoCards.length < 2) {
    updateCards = this.state.allCards.map(oldCard =>{
      if (oldCard.id === card.id){
        return {...oldCard, show:true}
      }
      else {
        return oldCard
      }
    })}
    else{
      return card
    }
    if (card.show === true){
      return null
    }
    else{
      this.setState({
        twoCards:[...this.state.twoCards,card],
        allCards: updateCards
      }, () => {
          if (this.state.twoCards.length === 2){
                this.compareCards()
        }
      })}

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
                match={this.state.match}
                matchToNull={this.matchToNull}
                twoCards={this.twoCards}
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
