import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const MinMaxElement = () => {
  return (
    <div>
      <div className="container">
        <h1 className="type--h1">Find the maximum and minimum element in an array</h1>
        <ReactEmbedGist
          gist="aamrits/ba0bc999711120e65b245e18c37d4ddc"
          wrapperClass="gist__bash"
          titleClass="gist__title"
        />
      </div>
    </div>
  )
}

export default MinMaxElement;