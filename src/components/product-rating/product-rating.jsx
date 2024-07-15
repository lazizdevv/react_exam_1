import React from 'react';
import { StarIcon } from '../../assets/svg/StarIcon';

export const ProductRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <span key={i}>
        <StarIcon/>
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};