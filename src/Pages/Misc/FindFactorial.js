import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const FindFactorial = () => {
  return (
    <>
        <h1 className="type--h1">Function to find factorial</h1>
        <ReactEmbedGist
            gist="aamrits/67000527c01ea817d78f6d6e3a87c131"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default FindFactorial;