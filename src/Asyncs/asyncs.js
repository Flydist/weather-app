const apiBaseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api'

export const findSimilarCities = async (searchedValue) => {
  const response = await fetch(`${apiBaseUrl}/location/search/?query=${searchedValue}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  const resJson = await response.json()
  return resJson
}

export const getSelectedCity = async (selectedCityID) => {
  const response = await fetch(`${apiBaseUrl}/location/${selectedCityID}`)
  const resJson = await response.json()
  return resJson
}
