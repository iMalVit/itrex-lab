import React from "react";
import {
  MessageContainer,
  MessageDescription,
  MessageTitle,
  AttentionIcon,
  CloseButton,
} from "./Message.style";

const ErrorMessage = (props) => {
  return (
    <>
      <MessageContainer error>
        <AttentionIcon />
        <CloseButton />
        <MessageTitle>Error message goes here</MessageTitle>
        <MessageDescription>{props.errorMessage}</MessageDescription>
      </MessageContainer>
    </>
  );
};

export default ErrorMessage;
