import React, { memo } from 'react';
import ResultDisplay from './ResultDisplay';
import '../searchresult.css';
import History from './History';
const SearchResult = memo(() => {
  return (
    <>
    <div className='container'>
        <div className='head'>Search</div>
        <div className='result'>
            <ResultDisplay ></ResultDisplay>
        </div>
        <div className='history'>
            <History></History>
        </div>
        <div className='cancle'><a href="#">Cancle Search</a></div>
    </div>
    </>
  )
})

export default SearchResult