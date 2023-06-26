import styled from 'styled-components';
import { BiPencil as Pencil, BiTrash as Trash } from 'react-icons/bi';
import { AiFillStar as Star } from 'react-icons/ai';
export const PencilBtn = styled(Pencil)`
  fill: #3e85f3;
  width: 30px;
  height: 30px;
  border: 8px #e3f3ff solid;
  background: #e3f3ff;
  border-radius: 50%;

  &:hover,
  &:focus {
    fill: #ffffff;
    background: #3e85f3;
    border: 8px #3e85f3 solid;
  }
`;
export const TrashBn = styled(Trash)`
  fill: #ea3d65;
  width: 30px;
  height: 30px;
  border: 8px #facedd solid;
  background: #facedd;
  border-radius: 50%;
  &:hover,
  &:focus {
    fill: #ffffff;
    background: #ea3d65;
    border: 8px #ea3d65 solid;
  }
`;
export const StarRating = styled(Star)`
  width: 24px;
  height: 24px;
`;
