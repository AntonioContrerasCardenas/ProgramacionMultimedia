// Conseguir la latitud,longitud,altitud con mapbox a partir de una ciudad

import axios, { isAxiosError } from 'axios'
import { MapboxReponse } from '../interfaces/mapbox.interfaces'
import { MAPBOX_TOKEN } from '../config/config'

const mapboxToken = MAPBOX_TOKEN
if (!mapboxToken) {
  console.log('Debes ingresar un token de mapbox')
  process.exit(1)
}

export const getCoordinates = async (
  city: string
): Promise<{
  latitude: number
  longitude: number
  name: string
}> => {
  const url = 'https://api.mapbox.com/search/geocode/v6/forward'

  try {
    const { data } = await axios.get<MapboxReponse>(url, {
      params: {
        access_token: mapboxToken,
        q: city,
        limit: 1,
      },
    })

    return {
      latitude: data.features[0].properties.coordinates.latitude,
      longitude: data.features[0].properties.coordinates.longitude,
      name: data.features[0].properties.name,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('Error en la petición a mapbox: ')
      console.log(error.response?.data)
    }

    throw new Error('Error en la petición a mapbox')
  }
}
