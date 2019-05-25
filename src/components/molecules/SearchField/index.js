import React from 'react';

import * as Styled from './SearchField.styles'

import TextField from '../../atoms/TextField';
import IconButton from '../../atoms/IconButton';
import SearchIcon from '../../../../static/search_icon.png'

function SearchField() {
  return (
    <Styled.SearchForm>
      <TextField placeholder="Nunca dejes de buscar" />
      <IconButton Icon={SearchIcon} backgroundColor="background.main" />
    </Styled.SearchForm>
  )
}

export default SearchField