import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const QuickSort = () => {
  return (
    <>
        <h1 className="type--h1">Write a function for quickSort</h1>
        <ReactEmbedGist
            gist="aamrits/7f00ee66a9d8b3ede5bef2a33d5c60ae"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default QuickSort;