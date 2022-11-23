import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const SelectionSort = () => {
  return (
    <>
        <h1 className="type--h1">Write a function for selectionSort</h1>
        <ReactEmbedGist
            gist="aamrits/c007191ce04fa4bf35d8f5185a5ad877"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default SelectionSort;