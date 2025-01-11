import { getWeatherByLocation } from './controllers/locationWeather'

process.loadEnvFile()

const place = process.argv[2]

if (!place) {
  console.log('Debes ingresar una ciudad')
  process.exit(1)
}

getWeatherByLocation(place)
