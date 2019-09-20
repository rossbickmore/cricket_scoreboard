import React, {Component} from 'react';


class Stats extends Component {
    constructor(props) {
        super(props);
        this.runsPerWicket = this.runsPerWicket.bind(this)
        this.runsPerOver = this.runsPerOver.bind(this)
    }

    runsPerWicket = () => {
        if (this.props.data.homeWickets == 0 || this.props.data.Wickets == 0) return "-"
        if (this.props.data.battingTeam === "home") {
            return (this.props.data.homeRuns / this.props.data.homeWickets)
          } else {
            return (this.props.data.awayRuns /  this.props.data.awayWickets)
          }
    }

    runsPerOver = () => {
        if (this.props.data.homeBalls == 0 || this.props.data.awayBalls ) return "-"
        if (this.props.data.battingTeam === "home") {
            return Math.round(this.props.data.homeRuns / (this.props.data.homeBalls/6)*100)/100
          } else {
            return this.props.data.awayRuns / (this.props.data.awayBalls - Math.floor(this.props.data.awayBalls/6)*6)
          }
    }


    render() {
        return (
            <div className="stats-container">
                <p>Runs per wicket: {this.runsPerWicket()}</p>
                <p>Runs per over: {this.runsPerOver()}</p>
            </div>
        )
    }
    
}

export default Stats