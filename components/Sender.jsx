import React from 'react';
import Profile from './Profile';
import MessageComponent from './MessageComponent';
import TextField from './TextField';

export default function Sender() {
  return (
    <>
      {/* <Profile />
      <MessageComponent /> */}
      <TextField className="absolute bottom-0 mx-2"/>
    </>
  );
}