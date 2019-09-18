import React, {Component} from 'react';


class Controls extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="sub-container">
                <h4>Controls</h4>
                <div className="controls-container">
                    <button className="number-button">0</button>
                    <button className="number-button">1</button>
                    <button className="number-button">2</button>
                    <button className="number-button">3</button>
                    <button className="number-button">4</button>
                    <button className="number-button">6</button>
                    <button className="wicket-button">Wicket</button>
                </div>
            </div>
        )
    }
    
}

export default Controls