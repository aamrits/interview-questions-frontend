import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const ConstructPyramid = () => {
  return (
    <>
        <h1 className="type--h1">Create a pyramid of numbers</h1>
        <ReactEmbedGist
            gist="aamrits/4e21babad80e3b5579d855a1b74a840f"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default ConstructPyramid;