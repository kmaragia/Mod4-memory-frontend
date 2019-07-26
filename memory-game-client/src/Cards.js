import React from 'react';


class Cards extends React.Component{


  render(){
    return (
      <div>
      <img src ={this.props.card.card_image} />
      </div>
    )
  }
}

export default Cards;
