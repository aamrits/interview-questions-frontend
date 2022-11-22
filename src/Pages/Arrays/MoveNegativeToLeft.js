import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const MoveNegativeToLeft = () => {
  return (
    <div>
      <div className="container">
        <h1 className="type--h1">Move all negative numbers to beginning and positive to end.</h1>
        <ReactEmbedGist
          gist="aamrits/004261b497b622eaeebe7d732a947fce"
          wrapperClass="gist__bash"
          titleClass="gist__title"
        />
      </div>
    </div>
  )
}

export default MoveNegativeToLeft;