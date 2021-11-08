import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  -webkit-appearance: none;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(236, 220, 222, 0.3);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: rgba(220, 224, 236, 0.5);
  border-radius: 8px;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #a1abc9;
}

.form__show-password-icon_show {
  background: url("./assets/icons/visibility.svg") no-repeat !important;
}

@media (max-width: 560px) {
  ::-webkit-scrollbar {
    width: 0;
  }
}


input:focus {
  outline: none;
  border: 1px solid #7297FF
}
`;
