import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const RemoveDuplicateChars = () => {
  return (
    <>
        <h1 className="type--h1">Function to remove duplicate characters of a string</h1>
        <ReactEmbedGist
            gist="aamrits/1542906378e6e1722ed383c4f178f9b4"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default RemoveDuplicateChars;