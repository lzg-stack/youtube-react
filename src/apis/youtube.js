import axios from 'axios';

const KEY = 'AIzaSyBINBiRdwoj3m7aXv6uWmTVsOzW4bbrGaI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
