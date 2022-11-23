import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const CurryingExample = () => {
  return (
    <>
        <h1 className="type--h1">Write a function which will return these outputs</h1>
        <ReactEmbedGist
            gist="aamrits/fe8e98d7f78a8a9932cfb52d9296dfa8"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default CurryingExample;