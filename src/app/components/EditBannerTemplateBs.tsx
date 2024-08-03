"use client";
import React, { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner({ ...editedBanner, [name]: value });
  };

  return (
    <div className="bottom-sheet">
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

      <label htmlFor="cta">Call to Action</label>
      <input
        id="cta"
        name="cta"
        value={editedBanner.cta}
        onChange={handleChange}
        placeholder="Enter the call to action text"
      />

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        value={editedBanner.image}
        onChange={handleChange}
        placeholder="Enter the image URL"
      />

      <label htmlFor="background">Background Image URL</label>
      <input
        id="background"
        name="background"
        value={editedBanner.background}
        onChange={handleChange}
        placeholder="Enter the background image URL"
      />

      <button type="button" onClick={() => onSave(editedBanner)}>Save</button>
      <button type="button" onClick={onClose}>Close</button>
    </div>
  );
};

export default EditBannerTemplateBs;
