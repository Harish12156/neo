import React from 'react';
import Icon from "../assets/images/icon button.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiDownload } from "react-icons/hi";

function Transactions()
 {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString(); 
  const monthString = currentDate.toLocaleDateString('en-US', { month: 'short' });
  // const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); 
  const expensive = [
    {
        name:'Floyd Miles',
        values:14255151,
        Amount:"$220",  
        time: `${monthString}, ${dateString}, ${timeString}`,
        status:"completed",
    },
    {
      name:'Esther Howard',
      values:14255151,
      Amount:"$70",
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"completed", 
    },
    { 
      name:'Ronald Richards',
      values:14255151,
      Amount:"$250",
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"cancelled", 
    },
    {
      name:'Theresa Webb',
      values:14255151,
      Amount:"$1200",
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"cancelled", 
    },
    {
      name:'Floyd Miles',
      values:14255151,
      Amount:"$220",
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"cancelled", 
  },
  {
    name:'Esther Howard',
    values:14255151,
    Amount:"$70",
    time: `${monthString}, ${dateString}, ${timeString}`,
    status:"completed", 
},
{
  name:'Ronald Richards',
  values:14255151,
  Amount:"$250",
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"completed", 
},
{
  name:'Esther Howard',
  values:14255151,
  Amount:"$70",
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"cancelled",
},
{
  name:'Ronald Richards',
  values:14255151,
  Amount:"$250",
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"cancelled",
  width:"100px",
},
  ];

  return (
    <div>
      <div className='container-fluid py-5'>
        <div className='row'>
          <div className='col-lg-12'>
            <div>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='mb-auto dash-head-1'>Transaction History</p>
                </div>
                <div className='d-flex me-2'>
                  <LazyLoadImage src={Icon} alt='Graph' className='img-fluid transaction-icon-img' />
                  <select className="form-select alt-apex-week-selector ms-2 py-2 border-0" aria-label="Default select example">
                    <option>Last Month</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='col-lg-12'>
            <div className='transaction-new-tables'>
              <table className="table">
                <thead>
                  <tr >
                    <th scope="col" className='transaction-table-td-00'>S.no</th>
                    <th scope="col" className='transaction-table-td-00'>Name</th>
                    <th scope="col" className='transaction-table-td-00'>Invoice ID</th>
                    <th scope="col" className='transaction-table-td-00'>Amount</th>
                    <th scope="col" className='transaction-table-td-00'>Date</th>
                    <th scope="col" className='transaction-table-td-00'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {expensive.map((item, index) => {
                    let statusColor;

                    if (index < 0) {
                      statusColor = 'green';
                    } else if (index >= 1 && index < 1) {
                      statusColor = 'red';
                    } else if (index === 5) {
                      statusColor = 'green'; 
                    } else {
                      statusColor = 'default';
                    }

                    return (
                      <tr key={index} className='new-mark-relegious-01 my-2'>
                        <td className="transaction-table-td-01">{index + 1}</td>
                        <td className="transaction-table-td-01">{item.name}</td>
                        <td className="transaction-table-td-01 transaction-table-td-02">{item.values} <HiDownload className='text-dark' /></td>
                        <td className="transaction-table-td-01">{item.Amount}</td>
                        <td className="transaction-table-td-01 transaction-table-td-02">{item.time}</td>
                        <td className="transaction-table-td-01" style={{ color: statusColor }}>{item.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Transactions;
