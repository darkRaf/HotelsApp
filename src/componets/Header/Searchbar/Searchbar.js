import { useState } from 'react';

function Searchbar(props) {


  const [term, setTerm] = useState('');

  const search = () => {
    props.onSearch(term);
    // console.log(term);
  };

  return (
    <div className='d-flex'>
      <input
        // style={{
        //   width: 'calc(100% - 20px)',
        // }}
        value={term}

        onChange={e => setTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()}
        className='form-control'
        type='text'
        placeholder='Szukaj...'></input>
      <button onClick={search} className='ms-1 btn btn-secondary'>
        Szukaj
      </button>
    </div>
  );
}

export default Searchbar;
