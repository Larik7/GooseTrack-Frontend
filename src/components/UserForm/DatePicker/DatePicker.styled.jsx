import styled from '@emotion/styled';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerCalendar = styled(DatePicker)`
  width: 134px;
  height: 34px;
  padding: 6px 12px;
  border-radius: 8px;
  margin-right: 25px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  outline: none;
  border: none;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--color-button-period-type);
  color: #fff;
  cursor: default;
  :hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.12;
    margin-right: 0px;
  }

  
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-top: 8px;
  width: 100%;
  height: 42px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: var(--border-account-input);
  border-radius: 8px;
  background: var(--container-page-bacground);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--primary-text-color);
  outline: none;
  
  

  :hover,
  :focus {
    border: 2px solid var(--nav-button-color-hover);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }

  
  &.error {
    border: 1px solid var(--text-error-color);
  }

  &.success {
    border: 1px solid var(--text-correct-color);
  }

  @media screen and (min-width: 375px) {
    width: 299px;
  }
 @media screen and (min-width: 735px) {
    width: 290px;
  }

  @media screen and (min-width: 1400px) {
    margin-bottom: 24px;
    width: 354px;
    height: 43px;
    font-size: 14px;
    line-height: 1.13;
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    * {
      margin: 0;
      padding: 0;
    }



    background-color: inherit;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
    border: none;

    &__year-dropdown {
      background-color: #ffffff;
    }

    &__year-option--selected_year {
      color: #3e85f3;
    }

    &__year-read-view--selected-year {
      color: #fff;
    }

    &-wrapper:hover & {
      background-color: #ffffff;
      border-radius: 50%;
    }
    &_year-read-view--selected-year {
      color: #ffff;
    }
    &-popper {
      transform: translate(881.05px, 950.217px);
      inset: 0px auto auto 50px;
    }

  &__month-container {
    padding: 15px 18px;
    background-color: #3e85f3;
    border-radius: 16px;
    position: absolut;

      
   & .react-datepicker__header  {
   background-color: #3e85f3;
}

   

    & .react-datepicker__day-name,
    & .react-datepicker__day {
      width: 48px;
      height: 48px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 1;
      color: #ffffff;
      border-radius: 50%;

      &--keyboard-selected {
        border-radius: 50%;
      }

    &__navigation {
      width: 18px;
      height: 18px;
      top: 24px;


      &--previous {
        left: 18px;
      }

      &--next {
        right: 18px;
      }
    }

    &__header {
       background-color: #3e85f3;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0;
    }

    &__month-container {
      padding: 15px 18px;
      background-color: #3e85f3;
      border-radius: 16px;

      & .react-datepicker__day-name,
      & .react-datepicker__day {
        width: 48px;
        height: 48px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 1;
        color: #ffffff;

        &--keyboard-selected,
        &--selected {
          background-color: #ffffff;
          border-radius: 50%;
          color: #3e85f3;
        }
      }

      & .react-datepicker__day {
        &.outside-month {
          visibility: hidden;
          pointer-events: none;
        }
        &.highlighted-weekend {
          opacity: 0.35;
        }

    
        &:hover,
        &:focus {
          color: #3e85f3;
          border-radius: 50%;
        }
      }

      & .react-datepicker__current-month {
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;

      
      }
    }
    
      
  }

  @media screen and (max-width: 768px) {
    .react-datepicker {
      line-height: 1;

      &__month-container {
        padding: 15px 18px;

        & .react-datepicker__day {
          font-size: 18px;
        }
        & .react-datepicker__day-names {
          margin: 0px;
        }
        & .react-datepicker__day-name {
          width: 48px;
          height: 48px;
          margin: 0;
        }

        & .react-datepicker__day {
          &.outside-month {
            visibility: hidden;
            pointer-events: none;
          }
          &.highlighted-weekend {
            opacity: 0.35;
          }
          &:hover,
          &:focus {
            color: #3e85f3;
            border-radius: 50%;
          }
        }

        & .react-datepicker__current-month {
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .react-datepicker {
      font-size: 14px;
      line-height: 1;

    
      &__month-container {
        padding: 0 0 20px 0;

        .react-datepicker__week:not(:last-child) {
          margin-bottom: 3px;
        }

        & .react-datepicker__day {
          width: 32px;
          height: 32px;
          margin: 8px 6px;
          font-size: 14px;

          &--keyboard-selected,
          &--selected {
            background-color: #ffffff;
            border-radius: 50%;
            color: #3e85f3;
          }
          &__header {
            height: 100px;
            background-color: #3e85f3;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0;
          }
        }
        & .react-datepicker__day-names {
          margin: 0px;
        }
        & .react-datepicker__day-name {
          width: 48px;
          height: 42px;
          margin: 0 -2px;
          padding: 15px 19px;
          color: #ffffff;
          &::first-of-type {
            margin-left: 3px;
          }
          &:last-child {
            margin-right: 3px;
          }
        }

        & .react-datepicker__day {
          &.outside-month {
            visibility: hidden;
            pointer-events: none;
          }
          &.highlighted-weekend {
            opacity: 0.35;
          }
          &:hover,
          &:focus {
            color: #3e85f3;
            border-radius: 50%;
          }
        }

        & .react-datepicker__current-month {
          margin-top: 9px;
          padding: 2px 0;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
  }
`;
