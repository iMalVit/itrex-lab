import React from "react";
import RestorePasswordForm from "./form/RestorePasswordForm";
import { BackgroundWrapper } from "../common/common.style";
import { Content } from "./RestorePassword.style";

const RestorePassword = (props) => {
  return (
    <BackgroundWrapper page="RestorePassword">
      <Content>
        <RestorePasswordForm onSaveEmailData={props.onSaveEmailData} />
      </Content>
    </BackgroundWrapper>
  );
};

export default RestorePassword;
