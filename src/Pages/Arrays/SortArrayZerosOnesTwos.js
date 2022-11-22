import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const SortArrayZerosOnesTwos = () => {
  return (
    <div>
      <div className="container">
        <h1 className="type--h1">Sort an array of 0s, 1s and 2s</h1>
        <ReactEmbedGist
          gist="aamrits/c263f815e12f345c2d4ba15ca65cd359"
          wrapperClass="gist__bash"
          titleClass="gist__title"
        />
      </div>
    </div>
  )
}

export default SortArrayZerosOnesTwos;