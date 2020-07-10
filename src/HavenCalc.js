import React, {Component} from 'react';

class HavenCalc extends Component{
  constructor(props){
    super(props);
    this.state = {
      pLength: '',
      lbLength: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }








  render(){
    let partLength = this.state.pLength;
    let lbLength = this.state.lbLength;

    //math variables
    let wholeParts = parseInt(lbLength/partLength);
    let mathOffall = (lbLength % partLength).toFixed(3);
    let lostFromCut = wholeParts * .125;
    let remainingOffall = (mathOffall - lostFromCut).toFixed(3);

    return(
      <div class="container">
        <div class="intro">
        <h2>Haven Calc 2.2</h2>
          <ul>
            <li>.125 (1/8th inch) is lost per cut from verticle blade.</li>
            <li>Aim for 2-3 inch left over. Less may destroy last piece.</li>
            <li>Arrow UP or DOWN and watch magic happen.</li>
            <li><a href="https://github.com/jprudolph03/havenCalc2k">Repo</a></li>
          </ul>
        </div>
        <div class="row">
          <form class="four columns">
                <label>Input Part Length: </label>
                <input onChange={this.handleChange} type="number" name="pLength" value={partLength} />
                <label>Input Longbar Length: </label>
                <input onChange={this.handleChange} type="number" name="lbLength" value={lbLength} />
          </form>
          <div class="roffall">
            <h1>Remaining Offall</h1>
            {remainingOffall < 2 || remainingOffall > 4 ? <h2 class='red'>{remainingOffall}</h2> : <h2 class='green'>{remainingOffall}</h2>}
          </div>
        </div>
        <table>
          <thead>
              <tr>
                <th>Part Length</th>
                <th>Longbar Length</th>
                <th>Whole Parts</th>
                <th>Math Offall</th>
                <th>Lost from Cut</th>
                <th>Remaining Offall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{partLength}</td>
                <td>{lbLength}</td>
                <td>{wholeParts}</td>
                <td>{mathOffall}</td>
                <td>{lostFromCut}</td>
                {remainingOffall < 2 || remainingOffall > 4 ? <td class='red'>{remainingOffall}</td> : <td class='green'>{remainingOffall}</td>}
              </tr>
            </tbody>
          </table>
      </div>


    )
  }
}

export default HavenCalc;
