"use client";
import React, { useState } from 'react';
import BannerImageComp from './components/ BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';
import { bannerData } from './data/data';
import styles from './styles/BannerImageComp.module.css';
import Modal from './Model';

const Home: React.FC = () => {
  const [banners, setBanners] = useState(bannerData);
  const [editingBanner, setEditingBanner] = useState<null | typeof bannerData[0]>(null);

  const handleEdit = (id: number) => {
    const banner = banners.find(b => b.id === id) || null;
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: typeof bannerData[0]) => {
    setBanners(banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b)));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className={styles.container}>
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          {...banner}
          onEdit={handleEdit}
        />
      ))}
      {editingBanner && (
        <Modal onClose={handleClose}>
          <EditBannerTemplateBs
            banner={editingBanner}
            onSave={handleSave}
            onClose={handleClose}
          />
        </Modal>
      )}
    </div>
  );
};

export default Home;
