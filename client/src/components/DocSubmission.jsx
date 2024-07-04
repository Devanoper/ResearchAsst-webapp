import { useState } from 'react';
import './DocSubmission.css';

function DocSubmission() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log('File submitted:', file.name);
    } else {
      alert('Please select a file to submit.');
    }
  };

  return (
    <div className="doc-submission">
      <h2>Submit Your Paper</h2>
      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <input type="file" id="file-input" onChange={handleFileChange} />
          <label htmlFor="file-input">
            <img src="upload-icon.png" alt="Upload Icon" />
            {file ? file.name : 'Choose a file'}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DocSubmission;