import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://181.215.134.184:5000'
});

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-TOKEN, Game-Token, developerKey'
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
api.defaults.headers.common['ngrok-skip-browser-warning'] = 'any'

export default api