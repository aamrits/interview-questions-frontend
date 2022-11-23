import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const BubbleSort = () => {
  return (
    <>
        <h1 className="type--h1">Write a function for bubbleSort</h1>
        <ReactEmbedGist
            gist="aamrits/34880e078888e31c0f6c8644283b3a76"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default BubbleSort;