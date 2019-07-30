import React from 'react';


class Cards extends React.Component{



  render(){
    return (
      <div className="column" onClick={ () => {this.props.flipCard(this.props.card)}}>

          {this.props.card.show ? <img src ={this.props.card.card_image} /> : <img src = "https://i.imgur.com/E8LQ5A7.png" />}
       </div>
    )
  }
}

export default Cards;
