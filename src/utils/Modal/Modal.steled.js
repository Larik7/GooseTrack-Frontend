import styled from 'styled-components';
import { HiOutlineXMark as Cross } from 'react-icons/hi2';
export const BtnCloseModal = styled(Cross)`
  position: absolute;
  top: 19px;
  right: 19px;
  width: 24px;
  height: 24px;
  stroke: #000;
  cursor: pointer;
  &:hover,
  &:focus {
    stroke: #2b78ef;
  }
`;
