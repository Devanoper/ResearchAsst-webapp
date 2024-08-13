'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './DocSubmission.module.css';

function DocSubmission() {
  const [fileUrl, setFileUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      if (uploadedFile.type === 'application/pdf') {
        setFileUrl(URL.createObjectURL(uploadedFile));
        setErrorMessage('');
      } else {
        setFileUrl(null);
        setErrorMessage('Please select a valid PDF file.');
      }
    }
  };

  return (
    <div className={styles.docSubmission}>
      <h2>Submit Your Paper</h2>
      <form>
        <div className={styles.fileInputContainer}>
          <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} />
          <label htmlFor="file-input">
            <Image src="/upload-icon.png" alt="Upload Icon" width={20} height={20} />
            {fileUrl ? 'Change PDF' : 'Choose a PDF file'}
          </label>
        </div>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {uploadProgress > 0 && (
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${uploadProgress}%` }}>{uploadProgress}%</div>
          </div>
        )}
      </form>
      {fileUrl && (
        <div className={styles.filePreview}>
          <iframe src={fileUrl} title="PDF Preview" />
        </div>
      )}
    </div>
  );
}

export default DocSubmission;