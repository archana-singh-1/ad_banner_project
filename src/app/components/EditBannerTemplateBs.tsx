import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/BannerImageComp.module.css';

type EditBannerProps = {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
};

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [editedBanner, setEditedBanner] = useState(banner);
  const [previewImage, setPreviewImage] = useState(banner.image);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner({ ...editedBanner, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setPreviewImage(event.target.result);
        setEditedBanner({ ...editedBanner, image: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className={styles.editFormContainer}>
      <div className={styles.editFormInfo}>
        <p className={styles.editbnner}>Edit Banner</p>
        <div className={styles.bannerInfo}>
          <img src={previewImage} alt="Banner" className={styles.bannerPreview} />
          <div className={styles.bannerText}>
            <h3>{editedBanner.title}</h3>
            <p>{editedBanner.description}</p>
            <button type="button" className={styles.bannerButton}>{editedBanner.cta}</button>
          </div>
        </div>
      </div>

      <div className={styles.editFormImages}>
        <label htmlFor="imageUpload" className={styles.imageUploadLabel}>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          <input
            id="imageUpload"
            name="image"
            type="file"
            className={styles.hidden}
            onChange={handleImageUpload}
            title="Upload image"
          />
        </label>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.imageCircle}>
            <img src={banner.image[0]} alt="Banner" />
            <img src={banner.image[1]} alt="Banner" />
          </div>
        ))}
      </div>

      <div className={styles.editForm}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={editedBanner.title}
          onChange={handleChange}
          placeholder="Enter the title"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={editedBanner.description}
          onChange={handleChange}
          placeholder="Enter the description"
        ></textarea>

        <button type="button" onClick={handleSave}>Done</button>
        <button type="button" className={styles.downloadButton}>
          <FontAwesomeIcon icon={faDownload} /> Download
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;