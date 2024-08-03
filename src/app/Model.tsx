import React, { ReactNode } from 'react';
import styles from './styles/BannerImageComp.module.css';

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
  };
  
  const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
export default Modal;
