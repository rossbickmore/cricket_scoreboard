import React, {Component} from 'react';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overs: 0,
            battingFirst: "home"
        }
    }
    render() {
        return (
            <div className="settings-container">
                <h2>Enter the game conditions</h2>
                <form >
                    <div>
                    <label for="overs">Overs</label>
                    <input id="overs" defaultValue={this.state.overs} type="number" min="20" max="50"></input>
                    </div>
                   <div>
                   <label for="toss">Team batting first</label>
                    <select name="Team batting first" id="toss">
                        <option value="home" id="toss">Home</option>
                        <option value="away" id="toss">Away</option>
                    </select>
                   </div>
                </form>
            </div>
        )
    }
    
}

export default Settings