import React from 'react';
import styles from './PrintersList.module.css';

const PrintersList = () => {
  const printers = [
    {
      id: 1,
      branch: 'Hoa Khanh',
      type: 'Laser',
      manufacturer: 'HP',
      model: 'LaserJet Pro MFP M428fdw',
      releaseYear: 2018,
      warranty: '1 year',
      purchasePrice: 500,
      assignedTo: 'Nguyen Van A',
      isActive: true
    },
    {
      id: 2,
      branch: 'NVL',
      type: 'Inkjet',
      manufacturer: 'Canon',
      model: 'PIXMA TR150',
      releaseYear: 2020,
      warranty: '2 years',
      purchasePrice: 300,
      assignedTo: 'Nguyen Van A',
      
      isActive: true
    },
    {
      id: 3,
      branch: 'QT',
      type: 'Laser',
      manufacturer: 'Brother',
      model: 'HL-L2350DW',
      releaseYear: 2017,
      warranty: '1 year',
      purchasePrice: 400,
      assignedTo: 'Nguyen Van B',
    },
    {
        id: 4,
        branch: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        assignedTo: 'Nguyen Van B',
        isActive: true
      },
      {
        id: 5,
        branch: 'NVL',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        assignedTo: 'Nguyen Van B',
        isActive: true
      },
      {
        id: 6,
        branch: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        assignedTo: 'Nguyen Van B',
        isActive: true
      },
      {
        id: 7,
        branch: 'QT',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        assignedTo: 'Nguyen Van B',
        isActive: true
      },
      {
        id: 8,
        branch: 'Hoa Khanh',
        type: 'Laser',
        manufacturer: 'Brother',
        model: 'HL-L2350DW',
        releaseYear: 2017,
        warranty: '1 year',
        purchasePrice: 400,
        assignedTo: 'Nguyen Van B',
        isActive: false
      },
  ];

  return (
    <div className={styles.container}>
      <h2>Printers List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Printer ID</th>
            <th>Working at branch</th>
            <th>Type</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Release Year</th>
            <th>Warranty</th>
            <th>Purchase Price</th>
            <th>Assigned To</th>
            <th>Active status</th>
          </tr>
        </thead>
        <tbody>
          {printers.map((printer) => (
            <tr key={printer.id}>
              <td>{printer.id}</td>
              <td>{printer.branch}</td>
              <td>{printer.type}</td>
              <td>{printer.manufacturer}</td>
              <td>{printer.model}</td>
              <td>{printer.releaseYear}</td>
              <td>{printer.warranty}</td>
              <td>${printer.purchasePrice}</td>
              <td>{printer.assignedTo}</td>
              <td>{printer.isActive? <p className={styles.working}>Working</p> : <p className={styles.unfixed}>Unfixed</p>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintersList;