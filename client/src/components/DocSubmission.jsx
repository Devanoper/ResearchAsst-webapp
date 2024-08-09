import { useState } from 'react';
import './DocSubmission.css';

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
    <div className="doc-submission">
      <h2>Submit Your Paper</h2>
      <form>
        <div className="file-input-container">
          <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} />
          <label htmlFor="file-input">
            <img src="upload-icon.png" alt="Upload Icon" />
            {fileUrl ? 'Change PDF' : 'Choose a PDF file'}
          </label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {uploadProgress > 0 && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${uploadProgress}%` }}>{uploadProgress}%</div>
          </div>
        )}
      </form>
      {fileUrl && (
        <div className="file-preview">
          <embed src={fileUrl} type="application/pdf" />
        </div>
      )}
    </div>
  );
}

export default DocSubmission;
