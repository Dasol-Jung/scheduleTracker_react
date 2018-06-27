import React, {Component} from 'react';

const Dashboard = (props) => {

  return (

        <div>
                <select onChange={props.weekChangeHandler}>
                    <option>Weeks</option>
                    <option>Week 1</option>
                    <option>Week 2</option>
                    <option>Week 3</option>
                </select>
        </div>
  );
};

export default Dashboard;
