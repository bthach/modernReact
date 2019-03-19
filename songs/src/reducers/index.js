import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Thugs Mansion', duration: '4:05' },
        { title: 'I got Five on it', duration: '3:25' },
        { title: 'My Way', duration: '4:22' },
        { title: 'My name is', duration: '5:12' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    // switch(action) {
    //     case ''
    // }

    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});