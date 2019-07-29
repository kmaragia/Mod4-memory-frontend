import React from 'react';


class Cards extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      flipped: false
    }
  }

  render(){
    return (
      <div className="column" onClick={ () => {

          this.setState({
            flipped: true
          })
          this.props.flipCard(this.props.card)}}>
          {this.state.flipped ? <img src ={this.props.card.card_image} /> : <img src = "https://i.imgur.com/AxLzeTc.png" />}
       </div>
    )
  }
}

export default Cards;
