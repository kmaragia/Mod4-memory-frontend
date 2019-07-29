import React from 'react';


class Cards extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      flipped: false
    }
  }

  flipCard = () =>{
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render(){
    return (
      <div className="column" onClick={this.flipCard}>
          {this.state.flipped ? <img src ={this.props.card.card_image} /> : <img src = "https://i.imgur.com/AxLzeTc.png" />}
       </div>
    )
  }
}

export default Cards;
