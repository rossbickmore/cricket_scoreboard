import React, {Component} from 'react';


class Score extends Component {
    constructor(props) {
        super(props);
    }

    
   
    render() {
        return (
            <div className="sub-container">
                 <h4>Scores</h4>
                 <div className="home-container">
                    <h3>Home team</h3>
                    <div className="score-container">
                        <h1>{this.props.data.homeRuns} - {this.props.data.homeWickets} wickets </h1>
                        <h3>{Math.floor(this.props.data.homeBalls/6)}.{this.props.data.homeBalls - Math.floor(this.props.data.homeBalls/6)*6} overs</h3>
                    </div>
                 </div>
                 <div className="away-container">
                    <h3>Away team</h3>
                    <div className="score-container">
                        <h1>{this.props.data.awayRuns} - {this.props.data.awayWickets} wickets </h1>
                        <h3>{Math.floor(this.props.data.awayBalls/6)}.{this.props.data.awayBalls - Math.floor(this.props.data.awayBalls/6)*6} overs</h3>
                    </div>
                 </div>
            </div>
           
        )
    }
    
}

export default Score