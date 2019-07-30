import React from 'react';


class Cards extends React.PureComponent{

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     flipped: false
  //   }
  // }
  componentDidUpdate(){

    if (this.props.match === false){
      this.setState({flipped:false}, this.props.matchToNull)
    }
  }

  // flipCardBack = () => {
  //   this.setState({
  //     flipped:false
  //   })
  // }

  render(){
    return (
      <div className="column" onClick={ () => {

          // this.setState({
          //   flipped: true
          // })

          this.props.flipCard(this.props.card)}}>

          {this.props.card.show ? <img src ={this.props.card.card_image} /> : <img src = "https://i.imgur.com/E8LQ5A7.png" />}
       </div>
    )
  }
}

export default Cards;
