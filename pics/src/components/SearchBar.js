import React, { Component } from 'react';

class SearchBar extends Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.searchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}> 
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="hello" value={this.state.term} onChange={e => this.setState({ term : e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar