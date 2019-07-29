import React from 'react';


class Cards extends React.Component{


  render(){
    return (
      <div className="column" onClick={() => {this.props.flipCard(this.props.card)}}>
          <img src ={this.props.card.card_image} />
       </div>
    )
  }
}

export default Cards;
