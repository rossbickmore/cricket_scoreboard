import React, {Component} from 'react';


class Score extends Component {
    constructor(props) {
        super(props);
    }

    
   
    render() {
        return (
            <div className="mid-container">
                 <div className="home-container">
                    <h3>Home team</h3>
                    <div className="score-container">
                    {
                        this.props.data.homeBalls === 0 ? (
                            <h1>Yet to bat</h1>
                        ) : (
                            <div>
                            <h1>{this.props.data.homeRuns} - {this.props.data.homeWickets} wickets </h1>
                            <h3>{Math.floor(this.props.data.homeBalls/6)}.{this.props.data.homeBalls - Math.floor(this.props.data.homeBalls/6)*6} overs</h3>
                            </div>
                        )
                    }
                    { 
                        this.props.data.battingTeam === "home" ? (
                            <h4>Home team is batting</h4>
                        ) : (
                            <h4>Home team is bowling</h4>
                        )
                    }
                    </div>
                 </div>
                 <div className="away-container">
                    <h3>Away team</h3>
                    <div className="score-container">
                    {
                        this.props.data.awayBalls === 0 ? (
                            <h1>Yet to bat</h1>
                        ) : (
                            <div>
                            <h1>{this.props.data.awayRuns} - {this.props.data.awayWickets} wickets </h1>
                            <h3>{Math.floor(this.props.data.awayBalls/6)}.{this.props.data.awayBalls - Math.floor(this.props.data.awayBalls/6)*6} overs</h3>
                            </div>
                        )
                    }
                    { 
                        this.props.data.battingTeam === "home" ? (
                            <h4>Away team is bowling</h4>
                        ) : (
                            <h4>Away team is batting</h4>
                        )
                    }
                    </div>
                 </div>
            </div>
           
        )
    }
    
}

export default Score