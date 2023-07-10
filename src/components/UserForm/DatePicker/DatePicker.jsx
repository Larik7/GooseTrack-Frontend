// import React, { useCallback, useState } from 'react';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatePicker, DatePickerWrapper } from './DatePicker.styled';
const today = new Date().toISOString().split('T')[0];

export const MyDatePicker = ({ updateDate, name = '', birthday }) => {
  const [field, meta, helpers] = useField('date');
  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePickerWrapper>
      <StyledDatePicker

      
      {...field}
      selected={value || new Date(birthday || today)}
      onChange={date => {
        setValue(date);
        updateDate(date);
      }}
      showYearDropdown
      scrollableYearDropdown={true}
      yearDropdownItemNumber={25} 
        scrollableMonthYearDropdown
        
    /></DatePickerWrapper>
  );
};
