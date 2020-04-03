const axios = require('axios').default;

const API_KEY = '100fe94d8cae227a3aaa2c6e093e090c';

class Weather {
  static async retrieveByCity(city, callback) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      callback(response.data);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = Weather;
