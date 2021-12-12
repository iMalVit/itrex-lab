import styled from 'styled-components';
import Select from 'react-select';
import { colors } from '../../../../../components/common/theme';

const SelectStyled = styled(Select)`
  & .ReactSelect {
    &__value-container {
      padding: 8px 24px;
      font-weight: 400;
      font-size: 17px;
      line-height: 1.4;
    }

    &__single-value {
      color: ${colors.black};
    }

    &__placeholder {
      font-family: "Poppins", sans-serif;
      font-style: "normal";
      font-weight: "400";
      font-size: "17px";
      line-height: "24px";
      color: ${colors.gray_medium};
    }

    &__menu {
      padding: 4px;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.3;
      border-radius: 8px;
      box-shadow: none;
      filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
      overflow-y: hidden;
      &-list {
        padding-right: 4px;
        max-height: 128px;
        ::-webkit-scrollbar {
          width: 8px;
        }
      }

      @media (max-width: 1790px) {
        width: 400px;
      }

      @media (max-width: 1550px) {
        width: 300px;
      }
    }
    &__option {
      padding-left: 24px;
      height: 40px;
      cursor: pointer;
      &--is-focused,
      &--is-selected {
        background-color: ${colors.gray_light};
        border-radius: 6px;
        color: black;
      }
      &:active {
        background-color: ${colors.gray_light};
        color: black;
      }
    }
    &__control {
      margin-top: 16px;
      height: 56px;
      border: 1px solid ${colors.gray_solid};
      border-radius: 8px;

      &:hover {
        cursor: pointer;
        border: 1px solid ${colors.gray_solid};
      }

      &--is-focused {
        box-shadow: none;
        border: 1px solid ${colors.blue};

        &:hover {
          border: 1px solid ${colors.blue};
        }
      }
      &--menu-is-open {
        svg {
          transform: rotate(-180deg);
          color: ${colors.blue};
        }
      }

      @media (max-width: 1790px) {
        width: 400px;
      }

      @media (max-width: 1550px) {
        width: 300px;
      }
    }
    &__indicator-separator {
      background: none;
    }
    &__indicator {
      padding: 0 30px;
    }
  }
`;

export default SelectStyled;
