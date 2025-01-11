// Obtener la informacion meteorologica a partir de la latitud,longitud

import axios, { isAxiosError } from 'axios'
import { Current, WeatherStackResponse } from '../interfaces/weather.response'

const weatherApiKey = process.env.WEATHERSTACK_API_KEY

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<Current> => {
  const url = 'https://api.weatherstack.com/current'

  try {
    const { data } = await axios.get<WeatherStackResponse>(url, {
      params: {
        access_key: weatherApiKey,
        query: `${latitude},${longitude}`,
      },
    })

    return data.current
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data)
    }

    throw new Error('Error en la petición a weatherstack')
  }
}
