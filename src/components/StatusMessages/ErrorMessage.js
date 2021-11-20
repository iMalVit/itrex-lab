import React from "react";
import {
  MessageContainer,
  MessageDescription,
  MessageTitle,
  AttentionIcon,
  CloseButton,
} from "./Message.style";

const ErrorMessage = () => {
  return (
    <React.Fragment>
      <MessageContainer error>
        <AttentionIcon />
        <CloseButton />
        <MessageTitle>Error message goes here</MessageTitle>
        <MessageDescription>
          We show this message if something irreparable has happened. But there
          is nothing irreparable
        </MessageDescription>
      </MessageContainer>
      <MessageContainer success>
        <AttentionIcon />
        <CloseButton />
        <MessageTitle>Success message goes here</MessageTitle>
        <MessageDescription>
          We show this message if something awesome has happened. You are
          awesome too
        </MessageDescription>
      </MessageContainer>
    </React.Fragment>
  );
};

export default ErrorMessage;
