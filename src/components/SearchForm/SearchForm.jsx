import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function SearchForm({ onSubmit })  {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    if (query.trim() === '' ) {
      alert('Please enter a search query!');
      return;
    }
    setQuery('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        type="text"
        autoComplete="off"
        value={query || ''}
        autoFocus
        placeholder="Search images and photos"
        name="query"
        onChange={handleChange}
        aria-label="select"
        required
      >
      </Select>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

