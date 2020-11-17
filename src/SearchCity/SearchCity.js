import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { SearchContainer, StyledForm } from './SearchCity.styled'

const SearchCity = React.memo(({ handleSubmit }) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const checkValueLength = (e) => {
    if (e.target.value.length >= 3) {
      setIsDisabled(false)
    } else setIsDisabled(true)
  }

  return (
    <SearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledForm.Group>
          <StyledForm.Label>Введите город для поиска</StyledForm.Label>
          <StyledForm.Control
            type="text"
            placeholder="Moscow"
            name="searchInput"
            onChange={checkValueLength}
          />
        </StyledForm.Group>
        <Button variant="primary" type="submit" disabled={isDisabled}>
          Поиск
        </Button>
      </StyledForm>
    </SearchContainer>
  )
})

SearchCity.propTypes = {
  handleSubmit: PropTypes.func,
}

SearchCity.defaultProps = {
  handleSubmit: () => null,
}

export default SearchCity
