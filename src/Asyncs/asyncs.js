const _apiBaseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api'

export const findSimilarCities = async (searchedValue) => {
  const response = await fetch(`${_apiBaseUrl}/location/search/?query=${searchedValue}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  return await response.json()
}

export const getSelectedCity = async (selectedCityID) => {
  const response = await fetch(`${_apiBaseUrl}/location/${selectedCityID}`)

  return await response.json()
}