import { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

function CardView({ data, updateField, onFlipClicked, flipped}) {
  if (flipped) {
    return <CardBack key={data.id} data={data} updateField={updateField} onFlipClicked={onFlipClicked}/>
  } else {
    return <CardFront key={data.id} data={data} updateField={updateField} onFlipClicked={onFlipClicked}/>
  }
}

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = { flipped: false }
    this.onFlipClicked = this.onFlipClicked.bind(this)
  }

  onFlipClicked() {
    this.setState({ flipped: this.state.flipped === false ? true : false})
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-body">
         <CardView key={this.props.data.id} data={this.props.data} updateField={this.props.updateField} onFlipClicked={this.onFlipClicked} flipped={this.state.flipped}/>
        </div>
      </div>
    )
  }
}

export default Card;
