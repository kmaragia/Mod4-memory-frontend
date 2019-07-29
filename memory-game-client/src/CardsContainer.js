import React from 'react';
import Cards from "./Cards"


class CardsContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      allCards: [],
      twoCards: [],
      match: null
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
  // resetCards = () => {
  //   this.setState({
  //     flipped:false
  //   })
  // }
  // matchToNull = () => {
  //   this.setState({
  //     match:null
  //   })
  // }

  compareCards = () => {

    if (this.state.twoCards[0].card_image === this.state.twoCards[1].card_image){
      console.log('match')
    }

      // this.setState({
      //   match:true
      // })
      // console.log("is a match")
      // this.setState({
      //   match:true

    //   console.log("not a match")
    //   this.setState({
    //     twoCards:[]
    //   })
    //   setTimeout(() => {
    //     this.setState({
    //       match:false
    //     })
    // },2000)

}

  flipCard = (card) =>{
    //find the card from state.allCards and change its show value to true
    //update state for allCards for that card
    let updateCards = this.state.allCards.map(oldCard =>{
      if (oldCard.id === card.id){
        return {...oldCard, show:true}
      }else{
        return oldCard
      }
    })

      // console.log(card.show)
      this.setState({
        twoCards:[...this.state.twoCards,card],
        allCards: updateCards
      }, () => {

          if (this.state.twoCards.length === 2){
                this.compareCards()
        }
      })
      }

//
//    if (this.state.twoCards.length === 2){
//         this.compareCards()
// }


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
