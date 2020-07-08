import React, {Component} from 'react';


class HavenOutput extends Component{

  render(){
    return(
      <div class="HavenOutput six columns">
        <p><strong>Part Length:</strong> {this.props.partLength}</p>
        <p><strong>LongBar Length:</strong> {this.props.lbLength}</p>
        <p><strong>Whole Parts:</strong> {parseInt((this.props.lbLength)/(this.props.partLength))}</p>
        <p><strong>Math Offall:</strong> {((this.props.lbLength)%(this.props.partLength)).toFixed(3)}</p>
        <p><strong>Cut Loss:</strong> {(parseInt((this.props.lbLength)/(this.props.partLength))) * .125}</p>
        <p><strong>Left Over Offall:</strong> {((((this.props.lbLength)%(this.props.partLength)).toFixed(3)) - ((parseInt((this.props.lbLength)/(this.props.partLength))) * .125)).toFixed(3)}</p>
      </div>
    )
  }
}

export default HavenOutput;
