import React from 'react';


class Cards extends React.Component{


  render(){
    return (
  <div class="ui four column grid">
    <div class="row">
      <div class= "column" onClick={() => {this.props.flipCard(this.props.card)}}>
          <img src ={this.props.card.card_image} />
       </div>
    </div>
  </div>
    )
  }
}

export default Cards;
