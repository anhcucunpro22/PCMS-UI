import React, { useState } from 'react';
import styles from './EmployeeManagement.module.css';
import WorkHistoryList from './WorkHistoryList';

const EmployeeManagement = () => {
  const printers = [
    {
      printerId: 1,
      branchName: 'Hoa Khanh',
      type: 'Laser',
      manufacturer: 'HP',
      model: 'LaserJet Pro MFP M428fdw',
      releaseYear: 2018,
      warranty: '1 year',
      purchasePrice: 500,
      employeeId: 'Nguyen Van A',
    },
    {
      printerId: 2,
      branchName: 'NVL',
      type: 'Inkjet',
      manufacturer: 'Canon',
      model: 'PIXMA TR150',
      releaseYear: 2020,
      warranty: '2 years',
      purchasePrice: 300,
      employeeId: 'Nguyen Van A',
    },
    {
      printerId: 3,
      branchName: 'QT',
      type: 'Laser',
      manufacturer: 'Brother',
      model: 'HL-L2350DW',
      releaseYear: 2017,
      warranty: '1 year',
      purchasePrice: 400,
      employeeId: 'Nguyen Van B',
    },
    {
      printerId: 4,
        branchName: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 5,
        branchName: 'NVL',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 6,
        branchName: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 7,
        branchName: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 8,
        branchName: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
  ];
  const [newAssignment, setNewAssignment] = useState({ branchId: '', printerId: '', employeeId: '' });
  const [printerAssignments, setPrinterAssignments] = useState([
    {
      printerId: 1,
      branchName: 'Hoa Khanh',
      type: 'Laser',
      manufacturer: 'HP',
      model: 'LaserJet Pro MFP M428fdw',
      releaseYear: 2018,
      warranty: '1 year',
      purchasePrice: 500,
      employeeId: 'Nguyen Van A',
    },
    {
      printerId: 2,
      branchName: 'NVL',
      type: 'Inkjet',
      manufacturer: 'Canon',
      model: 'PIXMA TR150',
      releaseYear: 2020,
      warranty: '2 years',
      purchasePrice: 300,
      employeeId: 'Nguyen Van A',
    },
    {
      printerId: 3,
      branchName: 'QT',
      type: 'Laser',
      manufacturer: 'Brother',
      model: 'HL-L2350DW',
      releaseYear: 2017,
      warranty: '1 year',
      purchasePrice: 400,
      employeeId: 'Nguyen Van B',
    },
    {
      printerId: 4,
        branchName: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 5,
        branchName: 'NVL',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 6,
        branchName: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 7,
        branchName: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
      {
        printerId: 8,
        branchName: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        employeeId: 'Nguyen Van B',
      },
  ]);
  const [showAssignEmployee, setShowAssignEmployee] = useState(false);
  const [showAssignEmployeeCashier, setShowAssignEmployeeCashier] = useState(false);
  const [cashierAssignments, setCashierAssignments] = useState([{branchId: 1, branchName: 'Hoa Khanh', employeeId: 1234}, {branchId: 2,branchName: 'NVL', employeeId: 2234}, {branchId: 3, branchName: 'Hoa Khanh',employeeId: 1235}]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [workHistory, setWorkHistory] = useState([]);
  const [timesheet, setTimesheet] = useState([]);
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [branchName, setBranchName] = useState('');
  const [printerId, setPrinterId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handlePrinterAssignment = (printerId, employeeId) => {
    const newAssignments = [...printerAssignments];
    const index = newAssignments.findIndex((assignment) => assignment.printerId === printerId);
    if (index === -1) {
      newAssignments.push({ printerId, employeeId });
    } else {
      newAssignments[index].employeeId = employeeId;
    }
    setPrinterAssignments(newAssignments);
  };

  const handleCashierAssignment = (branchId, employeeId) => {
    const newAssignments = [...cashierAssignments];
    const index = newAssignments.findIndex((assignment) => assignment.branchId === branchId);
    if (index === -1) {
      newAssignments.push({ branchId, employeeId });
    } else {
      newAssignments[index].employeeId = employeeId;
    }
    setCashierAssignments(newAssignments);
  };

  

  const handleEmployeeSelection = (event) => {
    const employee = event.target.value;    
    setSelectedEmployee(employee);
    setWorkHistory([]);
  };

  // const printers = [
  //   {
  //     printerId: 1,
  //     branchName: 'Hoa Khanh',
  //     type: 'Laser',
  //     manufacturer: 'HP',
  //     model: 'LaserJet Pro MFP M428fdw',
  //     releaseYear: 2018,
  //     warranty: '1 year',
  //     purchasePrice: 500,
  //     employeeId: 'Nguyen Van A',
  //   },
  //   {
  //     printerId: 2,
  //     branchName: 'NVL',
  //     type: 'Inkjet',
  //     manufacturer: 'Canon',
  //     model: 'PIXMA TR150',
  //     releaseYear: 2020,
  //     warranty: '2 years',
  //     purchasePrice: 300,
  //     employeeId: 'Nguyen Van A',
  //   },
  //   {
  //     printerId: 3,
  //     branchName: 'QT',
  //     type: 'Laser',
  //     manufacturer: 'Brother',
  //     model: 'HL-L2350DW',
  //     releaseYear: 2017,
  //     warranty: '1 year',
  //     purchasePrice: 400,
  //     employeeId: 'Nguyen Van B',
  //   },
  //   {
  //     printerId: 4,
  //       branchName: 'QT',
  //       type: 'Laser',
  //       manufacturer: 'Brother',
  //       model: 'HL-L2350DW',
  //       releaseYear: 2017,
  //       warranty: '1 year',
  //       purchasePrice: 400,
  //       employeeId: 'Nguyen Van B',
  //     },
  //     {
  //       printerId: 5,
  //       branchName: 'NVL',
  //       type: 'Laser',
  //       manufacturer: 'Brother',
  //       model: 'HL-L2350DW',
  //       releaseYear: 2017,
  //       warranty: '1 year',
  //       purchasePrice: 400,
  //       employeeId: 'Nguyen Van B',
  //     },
  //     {
  //       printerId: 6,
  //       branchName: 'Hoa Khanh',
  //       type: 'Laser',
  //       manufacturer: 'Brother',
  //       model: 'HL-L2350DW',
  //       releaseYear: 2017,
  //       warranty: '1 year',
  //       purchasePrice: 400,
  //       employeeId: 'Nguyen Van B',
  //     },
  //     {
  //       printerId: 7,
  //       branchName: 'QT',
  //       type: 'Laser',
  //       manufacturer: 'Brother',
  //       model: 'HL-L2350DW',
  //       releaseYear: 2017,
  //       warranty: '1 year',
  //       purchasePrice: 400,
  //       employeeId: 'Nguyen Van B',
  //     },
  //     {
  //       printerId: 8,
  //       branchName: 'Hoa Khanh',
  //       type: 'Laser',
  //       manufacturer: 'Brother',
  //       model: 'HL-L2350DW',
  //       releaseYear: 2017,
  //       warranty: '1 year',
  //       purchasePrice: 400,
  //       employeeId: 'Nguyen Van B',
  //     },
  // ];

  const handleWorkHistoryRetrieval = (event) => {
    event.preventDefault();
    // Here you would make an API call to retrieve the work history for the selected employee and month
    // For now, we'll just simulate the data
    const workHistory = [
      { date: '2023-10-01',jobTitle: 'Cashier' ,hours: 8 },
      { date: '2023-10-02',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-03', jobTitle: 'Cashier' ,hours: 6 },
      { date: '2023-10-04',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-05', jobTitle: 'Cashier' ,hours: 7 },
      { date: '2023-10-06', jobTitle: 'Cashier' ,hours: 6 },
      { date: '2023-10-07', jobTitle: 'Cashier' ,hours: 8 },
      { date: '2023-10-08',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-09',jobTitle: 'Cashier' , hours: 6 },
      { date: '2023-10-10',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-11',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-12',jobTitle: 'Cashier' , hours: 6 },
      { date: '2023-10-13',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-14',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-15', jobTitle: 'Cashier' ,hours: 6 },
      { date: '2023-10-16',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-17',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-18', jobTitle: 'Cashier' ,hours: 6 },
      { date: '2023-10-19',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-20',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-21',jobTitle: 'Cashier' , hours: 6 },
      { date: '2023-10-22',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-23', jobTitle: 'Cashier' ,hours: 7 },
      { date: '2023-10-24',jobTitle: 'Cashier' , hours: 6 },
      { date: '2023-10-25',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-26',jobTitle: 'Cashier' , hours: 7 },
      { date: '2023-10-27',jobTitle: 'Cashier' , hours: 6 },
      { date: '2023-10-28',jobTitle: 'Cashier' , hours: 8 },
      { date: '2023-10-29', jobTitle: 'Cashier' ,hours: 7 },
      { date: '2023-10-30', jobTitle: 'Cashier' ,hours: 6 },
      { date: '2023-10-31',jobTitle: 'Cashier' , hours: 8 },
    ];
    setWorkHistory(workHistory);
  };

  const handleAssignEmployee = (event) => {
    event.preventDefault();
    const newAssignments = [...printerAssignments];
    newAssignments.push({
      branchName: event.target.elements.branchName.value,
      printerId: event.target.elements.printerId.value,
      employeeId: event.target.elements.employeeId.value,
    });
    setPrinterAssignments(newAssignments);
    setShowAssignEmployee(false);
  };
  const handleAssignEmployeeCashier = (event) => {
    event.preventDefault();
    const newAssignments = [...cashierAssignments];
    newAssignments.push({
      branchId: event.target.elements.branchIdCashier.value,
      branchName: event.target.elements.branchNameCashier.value,
      employeeId: event.target.elements.employeeIdCashier.value,
    });
    setCashierAssignments(newAssignments);
    setShowAssignEmployeeCashier(false);
  };

  const handleAssignEmployeePrinter = () => {
    setShowAssignEmployee(!showAssignEmployee);
  }

  const handleAssignCashier = () => {
    setShowAssignEmployeeCashier(!showAssignEmployeeCashier);
};

  return (
    <div className={styles.container}>
      <div className={styles.printerAssignments}>
        <h2>Printer Assignments (in every branch)</h2>
        <table>
        <thead>
  <tr>
    <th>Branch Name</th>
    <th>Printer ID</th>
    <th>Employee ID</th>
  </tr>
</thead>
<tbody>
  {printerAssignments.map((assignment) => (
    <tr key={assignment.printerId}>
      <td>{assignment.branchName}</td>
      <td>{assignment.printerId}</td>
      <td>
        <input
          type="text"
          value={assignment.employeeId}
          onChange={(event) =>
            handlePrinterAssignment(assignment.printerId, event.target.value)
          }
        />
      </td>
    </tr>
  ))}
</tbody>

        </table>
        <button className={styles.assignButton} onClick={handleAssignEmployeePrinter}>Assign printer to an employee</button>

        {showAssignEmployee && (
        <div>
            <form onSubmit={handleAssignEmployee}>
            <label htmlFor="branchName">Branch Name:</label>
            <input type="text" id="branchName" name="branchName" required />
            <label htmlFor="printerId">Printer ID:</label>
            <input type="text" id="printerId" name="printerId" required />
            <label htmlFor="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required />
            <button className={styles.assignButton} type="submit">Assign Employee</button>
            </form>
        </div>
        )}


      </div>

      <div className={styles.cashierAssignments}>
        <h2>Cashier Assignments (for each branch)</h2>
        <table>
          <thead>
            <tr>
              <th>Branch ID</th>
              <th>Branch Name</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {cashierAssignments.map((assignment) => (
              <tr key={assignment.branchId}>
                <td>{assignment.branchId}</td>
                <td>{assignment.branchName}</td>
                <td>
                  <input
                    type="text"
                    value={assignment.employeeId}
                    onChange={(event) => handleCashierAssignment(assignment.branchId, event.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className={styles.assignButton} onClick={handleAssignCashier}>Assign cashier to a branch</button>
      
        {showAssignEmployeeCashier && (
        <div>
            <form onSubmit={handleAssignEmployeeCashier}>
            <label htmlFor="branchName">Branch ID:</label>
            <input type="text" id="branchIdCashier" name="branchIdCashier" required />
            <label htmlFor="branchName">Branch Name:</label>
            <input type="text" id="branchNameCashier" name="branchNameCashier" required />
            <label htmlFor="employeeId">Employee ID:</label>
            <input type="text" id="employeeIdCashier" name="employeeIdCashier" required />
            <button className={styles.assignButton} type="submit">Assign Cashier</button>
            </form>
        </div>
        )}
      </div>
      
      <div className={styles.employeeSelection}>

        {/* this part */}
        <h2>Select Employee to see employee's work history</h2>
        <select value={selectedEmployee} onChange={handleEmployeeSelection}>
          <option value="">-- Select Employee --</option>
          {/* TODO: fetch employees from database */}
          <option value="employee1">Employee 1</option>
          <option value="employee2">Employee 2</option>
          <option value="employee3">Employee 3</option>
        </select>
        {selectedEmployee && (
          <div>
            <form onSubmit={handleWorkHistoryRetrieval}>
              <h3>Work History</h3>
              <label htmlFor="employeeId">Employee ID:</label>
              <input type="text" id="employeeId" name="employeeId" value={selectedEmployee} disabled />
              <button type="submit">View Work History</button>
            </form>
          </div>
        )}
        
        {workHistory.length > 0 && (
        <div>
            <h3>Work History for {selectedEmployee}</h3>
            <WorkHistoryList workHistory={workHistory} />
        </div>
        )}

        {timesheet.length > 0 && (
          <div>
            <h3>Timesheet for {selectedEmployee}</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Hours</th>
                </tr>
              </thead>
              <tbody>
                {timesheet.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.startTime}</td>
                    <td>{entry.endTime}</td>
                    <td>{entry.totalHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeManagement;
