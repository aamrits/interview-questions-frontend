import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const ReverseArray = () => {
  return (
    <div>
      <div class="container">
        <h1 class="type--h1">Reverse Array</h1>
        <ReactEmbedGist
          gist="aamrits/f825319b9bb9467b34dd58a9f1015896"
          wrapperClass="gist__bash"
          titleClass="gist__title"
        />
      </div>
    </div>
  )
}

export default ReverseArray;