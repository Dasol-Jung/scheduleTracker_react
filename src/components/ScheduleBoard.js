import React from 'react';
import ScheduleRow from './ScheduleRow';

class ScheduleBoard extends React.Component{ 
    
    render(){

        return(
            <div>
                <table>
                    <colgroup>
                        <col className='col1' span='3'/>
                        <col className='col2' span='7'/>
                    </colgroup> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                            <th>Section</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <ScheduleRow/>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default ScheduleBoard;