import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/BannerImageComp.module.css';

type BannerProps = {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
};

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  const handleEditClick = () => {
    onEdit(id);
  };

  const bannerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={styles.banner} style={bannerStyle}>
      <div className={styles.bannerImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.data}>
        <h2 className={styles.bannerTitle}>{title}</h2>
        <p className={styles.bannerDescription}>{description}</p>
        <button type="button" className={styles.bannerButton}>{cta}</button>
      </div>

      <button
        type="button"
        onClick={handleEditClick}
        className={styles.bannerButtonEdit}
        aria-label="Edit banner"
        title="Edit banner"
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};

export default BannerImageComp;
