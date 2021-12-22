import { createGlobalStyle } from 'styled-components';
import { colors } from './components/common/theme';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: ${colors.gray_light};
  font-family: "Poppins", sans-serif;
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
  color: ${colors.transparent};
}

input::-webkit-input-placeholder {
  color: ${colors.gray_medium};
}

.form__show-password-icon_show {
  background: url("./assets/icons/visibility.svg") no-repeat !important;
}


input:focus {
  outline: none;
  border: 1px solid ${colors.blue}
}

.Toastify__toast {
  width: 457px;
  height: 122px;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
}


.Toastify__toast-theme--colored.Toastify__toast--success {
  background-color: ${colors.green};
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  background-color: ${colors.red};
}

@media (max-width: 560px) {
  ::-webkit-scrollbar {
    width: 0;
  }
  
}

@media (max-width: 460px) {
  .Toastify__toast {
    width: 100vw;
    height: 70px;
    font-size: 15px;
  }
}

@keyframes react-loading-skeleton {
    100% {
        transform: translateX(100%);
    }
}

.react-loading-skeleton {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block; /* Enable animation */

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;

    position: relative;
    overflow: hidden;
    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */
}

.react-loading-skeleton::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        var(--base-color),
        var(--highlight-color),
        var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

`;

export default GlobalStyle;
