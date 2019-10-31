import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '../Icons/SearchIcon';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({});

const SearchBox = (props) => {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const { className } = props;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      className={cn(classes.textField, className)}
      variant="outlined"
      value={search}
      onChange={handleChange}
      placeholder="Search..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
