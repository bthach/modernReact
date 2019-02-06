import React, { Component } from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash';
import ImageList from './ImageList'

class App extends Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos/', {
            params: { query: term },

        });
        // }).then(response => {
        //     console.log(response.data.results);
        //     console.log(typeof(response.data.results.length));
        // })
        // console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar searchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
                
            </div>
        )
    }
}

export default App