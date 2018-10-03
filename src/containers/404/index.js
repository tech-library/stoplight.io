import React from 'react';

import Button from '@components/Button';

const NotFound = () => {
  return (
    <div className="bg-black flex items-center justify-center py-64 px-4">
      <div className="text-center w-96 text-white">
        <h1 className="pb-4">404</h1>

        <div className="text-2xl leading-normal font-default opacity-75">
          This page doesn't exist!
        </div>

        <div className="py-8">
          <img className="h-64" src="//thecatapi.com/api/images/get?format=src&type=gif" />
        </div>

        <Button href="/">Take me home</Button>
      </div>
    </div>
  );
};

export default NotFound;
