import React, { useState } from 'react';
import styles from './ReportTechnicalIssue.module.css';

const ReportTechnicalIssue = () => {
  const [branchId, setBranchId] = useState('');
  const [printerId, setPrinterId] = useState('');
  const [issueType, setIssueType] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const handleBranchIdChange = (event) => {
    setBranchId(event.target.value);
  };

  const handlePrinterIdChange = (event) => {
    setPrinterId(event.target.value);
  };

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleIssueDescriptionChange = (event) => {
    setIssueDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send the report to the administrator
    console.log({
      branchId,
      printerId,
      issueType,
      issueDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Tell me the <span className={styles.technicalIssue}>technical issue</span> here!</h3>
      <div className={styles.formGroup}>
        <label htmlFor="branchId" className={styles.label}>Branch ID (of where it happens):</label>
        <input type="text" id="branchId" name="branchId" value={branchId} onChange={handleBranchIdChange} required className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="printerId" className={styles.label}>Printer ID:</label>
        <input type="text" id="printerId" name="printerId" value={printerId} onChange={handlePrinterIdChange} required className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="issueType" className={styles.label}>Issue Type:</label>
        <select id="issueType" name="issueType" value={issueType} onChange={handleIssueTypeChange} required className={styles.select}>
          <option value="">Select Issue Type</option>
          <option value="Low ink/toner">Low ink/toner</option>
          <option value="Paper jam">Paper jam</option>
          <option value="Replacing part(s)">Replacing part(s)</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="issueDescription" className={styles.label}>Issue Description (optional):</label>
        <textarea id="issueDescription" name="issueDescription" value={issueDescription} placeholder='Detailly describe...' onChange={handleIssueDescriptionChange} className={styles.textarea} />
      </div>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default ReportTechnicalIssue;