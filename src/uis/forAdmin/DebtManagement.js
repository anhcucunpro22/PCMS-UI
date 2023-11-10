import React, { useState, useEffect } from 'react';
import styles from './DebtManagement.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const DebtManagement = () => {
  const [teachers, setTeachers] = useState([]);

  const simulatedData = [
    { id: 1, date: '2023-10-01', items: ['A4 paper', 'Stapler'], amountOwed: 50.00 , paymentStatus: true},
    { id: 2, date: '2023-09-15', items: ['Pens', 'Notebooks'], amountOwed: 25.00, paymentStatus: false },
    { id: 3, date: '2023-08-01', items: ['A4 paper', 'Staples'], amountOwed: 75.00, paymentStatus: false },
    { id: 4, date: '2023-10-01', items: ['A4 paper', 'Stapler'], amountOwed: 50.00 , paymentStatus: true},
    { id: 5, date: '2023-09-15', items: ['Pens', 'Notebooks'], amountOwed: 25.00, paymentStatus: true },
    { id: 6, date: '2023-08-01', items: ['A4 paper', 'Staples'], amountOwed: 75.00, paymentStatus: false },
  ];

  const [confirmingPayment, setConfirmingPayment] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handlePay = (id) => {
    setSelectedTeacher(id);
    setConfirmingPayment(true);
  };

  const handleConfirmPayment = () => {
    const updatedTeachers = teachers.map((teacher) => {
      if (teacher.id === selectedTeacher) {
        return { ...teacher, isPaid: true };
      } else {
        return teacher;
      }
    });
    setTeachers(updatedTeachers);
    setConfirmingPayment(false);
    setSelectedTeacher(null);
  };

  const handleCancelPayment = () => {
    setConfirmingPayment(false);
    setSelectedTeacher(null);
  };

  const handleViewDebt = () => {
    // Here you would make an API call to retrieve the list of teachers who owe money
    // For now, we'll just simulate the data
    const unpaidTeachers = simulatedData.filter((teacher) => !teacher.paymentStatus);
    setTeachers(unpaidTeachers);
  };

  useEffect(() => {
    handleViewDebt();
  }, []);

  const allPaid = teachers.every((teacher) => teacher.isPaid);

  const totalOwed = teachers.reduce((total, teacher) => {
    if (!teacher.isPaid) {
      return total + teacher.amountOwed;
    } else {
      return total;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <h2>Debt Data</h2>
      {teachers.length > 0 ? (
        <>
          <table className={styles.debtTable}>
            <thead>
              <tr>
                <th>Lecturer ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Amount Owed</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.date}</td>
                  <td>{teacher.items.join(', ')}</td>
                  <td>${teacher.amountOwed.toFixed(2)}</td>
                  <td>
                    {!teacher.isPaid ? (
                      confirmingPayment && selectedTeacher === teacher.id ? (
                        <>
                          <span style={{ marginRight: '7px' }}>Really?</span>
                          <button onClick={handleConfirmPayment} className={styles.confirmButton}><FontAwesomeIcon icon={faCheck} /></button>
                          <button onClick={handleCancelPayment} className={styles.cancelButton}><FontAwesomeIcon icon={faTimes} /></button>
                        </>
                      ) : (
                        <button onClick={() => handlePay(teacher.id)} className={styles.payButton}>He/she already paid</button>
                      )
                    ) : (
                      <span className={styles.paid}>Paid</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!allPaid && <p className={styles.totalDebt}>Total amount teachers owed all time: <span style={{ color: 'red' }}>${totalOwed.toFixed(2)}</span></p>}
        </>
      ) : (
        <p>No teachers owe money at this time.</p>
      )}
    </div>
  );
};

export default DebtManagement;
