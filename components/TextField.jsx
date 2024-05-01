import React, { useState } from 'react';
import Emoji from './Emoji';
import Upload from './Upload';
import Type from './Type';
import Mice from './Mice';

export default function TextField({ receiveMessage, sendMessage}) {
  
  return (
    <>
    <div className={``}>
      {/* <Emoji />
      <Upload /> */}
      <Type receiveMessage={receiveMessage} sendMessage={sendMessage}/>
      {/* <Mice /> */}
    </div>
    </>
  );
}