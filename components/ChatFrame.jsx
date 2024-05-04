import React, { useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";
import { useGSAP } from "@gsap/react";

export default function ChatFrame({
  setPassValue,
  value,
  code,
  primaryColor,
  secondaryColor,
  className,
}) {
  const [messages, setMessages] = useState([]);
  let msgArray = [];
  const OppositeScreen = (msg) => {
    console.log("value", value);
    if (value && code === value) {
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
      } else if (msg === "") {
        receiveMessage("Please type something.");
      } else if (msg !== "") {
        receiveMessage("I am a chatbot, I am here to help you.");
      }
    }
  };

  const receiveMessage = (msg) => {
    msg = msg.trim();

    useGSAP(() => {
      gsap.from(".messageReceive", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.1,
        x: innerWidth / 2,
        scrub: 5,
        ease: "bounce",
        borderRadius: "0",
      });

      gsap.from(".able_to_move", {
        opacity: 0.1,
        duration: 0.8,
        x: innerWidth / 2,
        scrub: 5,
      });
    }, {scope: MessageComponent, dependencies: [msg]});

    setMessages((prevMessages) => [
      ...prevMessages,
      { msg, isMessageReceive: true },
    ]);
  };

  const sendMessage = (msg, number) => {
    msg = msg.trim();

    setPassValue(number);

    gsap.from(".messageSend", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      delay: 0.1,
      x: -(innerWidth / 2),
      scrub: 5,
      ease: "bounce",
      borderRadius: "0",
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { msg, isMessageReceive: false },
    ]);
    OppositeScreen(msg);
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
              className={`${
                i === arr.length - 1
                  ? message.isMessageReceive
                    ? "messageReceive"
                    : "messageSend"
                  : ""
              }  ${className}`}
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
