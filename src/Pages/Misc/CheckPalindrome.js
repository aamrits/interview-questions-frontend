import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const CheckPalindrome = () => {
  return (
    <>
        <h1 className="type--h1">Function to check if a string is a palindrome</h1>
        <ReactEmbedGist
            gist="aamrits/d05db39b36523b0693613fc490b5a415"
            wrapperClass="gist__bash"
            titleClass="gist__title"
        />
    </>
  )
}

export default CheckPalindrome;