import React, { useState, useEffect } from "react"
import * as Location from "expo-location"

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)
  const WEATHER_API_KEY = "a90db0b1050e98e302288b890ad04ab9"
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  // console.log(TEST_KEY)

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError("could not fetch weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("permission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return [loading,error,weather]
}
