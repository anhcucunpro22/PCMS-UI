import React from 'react';

const WorkHistoryList = ( {workHistory} ) => {
    return (
        <ul>
            {workHistory.map((work, index) => (
                <li key={index}>
                {work.date} - {work.jobTitle} - {work.hours} hours worked
                </li>
            ))}
        </ul>
    );
}

export default WorkHistoryList;
