import { useContext, useEffect, useRef, useState } from 'react';
import PropsTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
  onSearch: PropsTypes.func.isRequired,
};

function Searchbar(props) {
  const [term, setTerm] = useState('');
  const theme = useContext(ThemeContext);

  const inputRef = useRef();

  const search = () => {
    props.onSearch(term);
  };

  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className='d-flex'>
      <input
        ref={inputRef}
        // style={{
        //   width: 'calc(100% - 20px)',
        // }}
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()}
        className='form-control'
        type='text'
        placeholder='Szukaj...'></input>
        <button onClick={search} className={`ms-1 btn btn-${theme.color}`}>
          Szukaj
        </button>
    </div>
  );
}

Searchbar.prototype = propTypes;

export default Searchbar;
