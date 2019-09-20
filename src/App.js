import React, {Component} from 'react';
import './App.css';
import Score from './components/Score'
import Stats from './components/Stats'
import Settings from './components/Settings'

class App extends Component {
  constructor(props) {
    super(props);
    //binding functions
    this.zero = this.zero.bind(this)
    this.one = this.one.bind(this)
    this.two = this.two.bind(this)
    this.three = this.three.bind(this)
    this.four = this.four.bind(this)
    this.six = this.six.bind(this)
    this.wicket = this.wicket.bind(this)
    this.toggleBatting = this.toggleBatting.bind(this)
    //set intial state
    this.state = {
      battingTeam: "home",
      homeInnings: 0,
      awayInnings: 0,
      homeRuns: 0,
      awayRuns: 0,
      homeWickets: 0,
      awayWickets: 0,
      homeBalls: 0,
      awayBalls: 0,
    }
  }
  
  //button functions 

  zero() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1
      })
    }
  }

  one() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeRuns: this.state.homeRuns + 1
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayRuns: this.state.awayRuns + 1
      })
    }
  }

  two() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeRuns: this.state.homeRuns + 2
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayRuns: this.state.awayRuns + 2
      })
    }
  }

  three() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeRuns: this.state.homeRuns + 3
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayRuns: this.state.awayRuns + 3
      })
    }
  }

  four() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeRuns: this.state.homeRuns + 4
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayRuns: this.state.awayRuns + 4
      })
    }
  }

  six() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeRuns: this.state.homeRuns + 6
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayRuns: this.state.awayRuns + 6
      })
    }
  }

  wicket() {
    console.log(this.state.battingTeam)
    if (this.state.battingTeam === "home") {
      this.setState({
        homeBalls: this.state.homeBalls + 1,
        homeWickets: Math.min(this.state.homeWickets + 1, 10)
      })
    } else {
      this.setState({
        awayBalls: this.state.awayBalls + 1,
        awayWickets: Math.min(this.state.awayWickets + 1, 10)
      })
    }
  }

  toggleBatting() {
    if (this.state.battingTeam === "home") {
      this.setState({
        battingTeam: "away"
      })
    } else {
      this.setState({
        battingTeam: "home"
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="top-container">
          <Settings data={this.state}/>
          <Stats data={this.state}/>
        </div>
        <Score data={this.state}/>
        <div className="bottom-container">
          <div className="controls-container">
            <div className="label">
              <p>Control Panel</p>
            </div>
            <button className={ this.state.battingTeam === "home" ? "batting-button-home" : "batting-button-away"} onClick={this.toggleBatting}>Team batting {this.state.battingTeam.toUpperCase()}</button>
            <button className="number-button" onClick={this.zero}>0</button>
            <button className="number-button" onClick={this.one}>1</button>
            <button className="number-button"  onClick={this.two}>2</button>
            <button className="number-button" onClick={this.three}>3</button>
            <button className="number-button" onClick={this.four}>4</button>
            <button className="number-button" onClick={this.six}>6</button>
            <button className="wicket-button" onClick={this.wicket}>WICKET</button>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
