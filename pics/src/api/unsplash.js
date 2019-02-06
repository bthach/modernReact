import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4f5e303aee64cc7a9f1ffe05029e704460bfeb202ea80db2679da66546305a93'
    }
})
