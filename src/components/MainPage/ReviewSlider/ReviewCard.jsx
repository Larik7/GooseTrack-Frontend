// Import
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Modal } from 'components/Modal/Modal';
import { useResponse } from 'hooks';
import css from './ReviewCard.module.css';
import sprite from 'icons/sprite.svg';


// Review Card
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
    <div className={css.ReviewCardContainer}>
      <div className={css.HeaderContainer}>
        <div className={css.AvatarWrapper}>
          {props.src ? (
            <img src={props.src} alt="User avatar" />
          ) : (
            <Avatar sx={{ width: 50, height: 50 }}>
              {props.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>

        <div>
          <h3>{props.name}</h3>
          <ul className={css.StarContainer} value={props.num}>
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
          </ul>
        </div>
      </div>

      <div className={css.CommentText} onClick={toggleModal}>
        {formattedComment}
        </div>
      {isModalOpen && (
        <Modal handlerCloseModal={toggleModal}>
          <div className={css.ModalContent}>
            {props.children}
            </div>
        </Modal>
      )}
    </div>
  );
};