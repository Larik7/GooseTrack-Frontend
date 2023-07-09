import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Modal } from 'components/Modal/Modal';
import { useResponse } from 'hooks';
import {
  ReviewCardContainer,
  HeaderContainer,
  AvatarWrapper,
  StarContainer,
  CommentText,
  ModalContent,
} from './ReviewCard.styled';
import sprite from 'icons/sprite.svg';

export const ReviewCard = props => {
  const { isMobile } = useResponse();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const shortenComment = comment => {
    const maxLength = isMobile ? 135 : 160;

    if (comment.length <= maxLength) {
      return comment;
    }
    return comment.slice(0, maxLength) + '...';
  };

  const formattedComment = shortenComment(props.children);

  return (
    <ReviewCardContainer>
      <HeaderContainer>
        <AvatarWrapper>
          {props.src ? (
            <img src={props.src} alt="User avatar" />
          ) : (
            <Avatar sx={{ width: 50, height: 50 }}>
              {props.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </AvatarWrapper>

        <div>
          <h3>{props.name}</h3>
          <StarContainer value={props.num}>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
          </StarContainer>
        </div>
      </HeaderContainer>

      <CommentText onClick={toggleModal}>{formattedComment}</CommentText>

      {isModalOpen && (
        <Modal handlerCloseModal={toggleModal}>
          <ModalContent>{props.children}</ModalContent>
        </Modal>
      )}
    </ReviewCardContainer>
  );
};
