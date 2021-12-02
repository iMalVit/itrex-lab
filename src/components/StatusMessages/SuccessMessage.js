import React from "react";
import {
  MessageContainer,
  MessageDescription,
  MessageTitle,
  AttentionIcon,
  CloseButton,
} from "./Message.style";

const SuccessMessage = () => {
  return (
    <>
      <MessageContainer success>
        <AttentionIcon />
        <CloseButton />
        <MessageTitle>Success message goes here</MessageTitle>
        <MessageDescription>
          We show this message if something awesome has happened. You are
          awesome too
        </MessageDescription>
      </MessageContainer>
    </>
  );
};

export default SuccessMessage;
