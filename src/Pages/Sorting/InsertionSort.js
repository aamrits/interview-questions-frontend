import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const InsertionSort = () => {
  return (
    <>
        <h1 className="type--h1">Write a function for insertionSort</h1>
        <ReactEmbedGist
            gist="aamrits/fcab9885c7f43490c605eded4709b763"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default InsertionSort;