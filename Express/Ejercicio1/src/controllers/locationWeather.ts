import { getCoordinates } from '../services/mapbox'
import { getWeather } from '../services/weather'

export const getWeatherByLocation = async (place: string): Promise<void> => {
  try {
    console.log('Consultando la ubicación...')
    const { latitude, longitude, name } = await getCoordinates(place)

    console.log(`Coordenadas de ${name} : ${latitude}, ${longitude}`)

    console.log('Consultando el clima...')
    const weather = await getWeather(latitude, longitude)

    console.log(`Clima de ${name}:`)
    console.log(`Temperatura: ${weather.temperature} ºC`)
    console.log(`Humedad: ${weather.humidity} %`)
    console.log(`Precipitación: ${weather.precip} mm`)
    console.log(`Viento: ${weather.wind_speed} km/h`)
    console.log(`Dirección: ${weather.wind_dir}`)
    console.log(`Descripción: ${weather.weather_descriptions[0]}`)
  } catch (error) {
    console.log(`Error en el controlador : ${error}`)
  }
}
