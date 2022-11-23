import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const ConvertDecimalToHexadecimal = () => {
  return (
    <>
        <h1 className="type--h1">Function to convert decimal to hexadecimal</h1>
        <ReactEmbedGist
            gist="aamrits/3c2ddb3f27d7c393a47a78a2dfd2434f"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default ConvertDecimalToHexadecimal;