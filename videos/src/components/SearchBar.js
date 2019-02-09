import React, { Component } from 'react';

class SearchBar extends Component {
    state = { query: ''};

    handleChange = (event) => {
        this.setState({ query: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // todo, make sure call callback from parent component
        this.props.onFormSubmit(this.state.query);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.query} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
            );
    }
}

export default SearchBar;