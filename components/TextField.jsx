import React, { useState } from 'react';
import Emoji from './Emoji';
import Upload from './Upload';
import Type from './Type';
import Mice from './Mice';

export default function TextField({className, getMessage}) {
  
  return (
    <>
    <div className={`${className}`}>
      {/* <Emoji />
      <Upload /> */}
      <Type getMessage={getMessage}/>
      {/* <Mice /> */}
    </div>
    </>
  );
}