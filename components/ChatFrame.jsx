import React, { useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";

export default function ChatFrame({ className, primaryColor, secondaryColor }) {
  const [messages, setMessages] = useState([]);
  let msgArray = [];
  const OppositeScreen = (msg) => {
    msgArray = [`Hello`, `Hi`, `hello`, `hi`];

    if (msg === "Hello" || msg === "hello") {
      receiveMessage("Hi");
    } else if (msg === "Hi" || msg === "hi") {
      receiveMessage("Hello");
    } else if (msg === "how are you") {
      receiveMessage("I am fine, and you?");
    } else if (msg === "i am fine") {
      receiveMessage("That's great to hear.");
    } else if (msg === "what is your name") {
      receiveMessage("I am a chatbot.");
    } else if (msg === "what is your age") {
      receiveMessage("I am a chatbot, I don't have age.");
    } else if (msg === "tell me something about you") {
      receiveMessage("I am a chatbot");
    }
    // code for all upper case and lower case for example user type "Hello", "hello", "heLLo" and "HEllO" they should be same and chatbot should reply accordingly.
    else if (msg === "") {
      receiveMessage("Please type something.");
    } else if (msg !== "") {
      receiveMessage("I am a chatbot, I am here to help you.");
    }
  };

  const receiveMessage = (msg) => {
    msg = msg.trim();

    gsap.from(".messageReceive", {
      opacity: 0.1,
      duration: 1.8,
      x: innerWidth / 2,
      scrub: 5,
    });
    
    setMessages((prevMessages) => [
      ...prevMessages,
      { msg, isMessageReceive: true },
    ]);
  };
  
  const sendMessage = (msg) => {
    msg = msg.trim();
    
    gsap.from(".messageSend", {
      opacity: 0.1,
      duration: 1.8,
      x: -(innerWidth / 2),
      scrub: 5,
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { msg, isMessageReceive: false },
    ]);
    console.log(msg);
    OppositeScreen(msg);
    console.log(msg);
  };

  return (
    <>
      <div
        style={{ height: innerHeight / 2 - 40 }}
        className={`flex flex-col justify-between absolute overflow-auto scrollbar-hide`}
      >
        <div className="flex flex-col justify-between">
          {messages.map((message, i, arr) => (
            <MessageComponent
              key={i}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              msg={message.msg}
              isMessageReceive={message.isMessageReceive}
              className={
                i === arr.length - 1
                  ? message.isMessageReceive
                    ? "messageReceive"
                    : "messageSend"
                  : ""
              }
            />
          ))}
        </div>

        <div>
          <TextField
            className=""
            // receiveMessage={receiveMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </>
  );
}
