import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const PerimeterSumMatrix = () => {
  return (
    <>
        <h1 className="type--h1">Find the sum of the perimeters of a matrix</h1>
        <ReactEmbedGist
            gist="aamrits/4eff97cefafa7448e4affd45958cae07"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default PerimeterSumMatrix;