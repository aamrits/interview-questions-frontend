import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const MergeSort = () => {
  return (
    <>
        <h1 className="type--h1">Write a function for mergeSort</h1>
        <ReactEmbedGist
            gist="aamrits/d3976d65f16d1cca98e81a7916233c0e"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default MergeSort;