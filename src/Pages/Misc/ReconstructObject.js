import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const ReconstructObject = () => {
  return (
    <>
        <h1 className="type--h1">Given an Object "user". Write a function so that all the child keys (with thier values) gets added to the "user" Object. The new object should have these keys. </h1>
        <ReactEmbedGist
            gist="aamrits/ac7fcb810b54339917c79ff7ba033554"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default ReconstructObject;