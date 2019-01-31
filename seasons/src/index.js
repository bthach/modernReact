import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

        navigator.geolocation.getCurrentPosition(
            position => this.setState({
                lat: position.coords.latitude
            }),
            error => {
                this.setState({ errorMessage : error.message });
            }
        );
    }
    
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>;

        // return (
        //     <div>
        //         Latitude: {this.state.lat} 
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        // );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));