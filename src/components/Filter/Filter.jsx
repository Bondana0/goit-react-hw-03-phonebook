import PropTypes from 'prop-types';
import { FilterInp, FilterSticker } from './filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterSticker>
      <span>Find contacts by name</span>
      <FilterInp
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </FilterSticker>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
