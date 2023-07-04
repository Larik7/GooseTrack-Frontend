// Import
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/x-close.svg';

// Styled Components
export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #171820;
  border: none;
  min-width: 100px;
  min-height: 100px;
  box-shadow: 0px 4px 57px rgba(17, 17, 17, 0.05);
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  stroke: black;

  @media screen and (min-width: 375px) {
    top: 18px;
    right: 18px;
  }
`;

export const MyCloseIcon = styled(CloseIcon)`
  stroke: #FFFFFF;
  :hover {
    stroke: rgb(62, 133, 243);
    transition: stroke 250ms linear 0s;
  }
`;