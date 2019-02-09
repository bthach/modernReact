import axios from 'axios';

const KEY = 'AIzaSyB3gbHUmbBqTHpVjBLmyPv_OnJkB9h64ZY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});