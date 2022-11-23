import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const CheckPrime = () => {
  return (
    <>
        <h1 className="type--h1">Function to check if number is prime</h1>
        <ReactEmbedGist
            gist="aamrits/a0ad1bc9970d5168b6aa8c7fdb341883"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default CheckPrime;