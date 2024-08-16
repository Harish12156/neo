import React from 'react';
import Icon from "../assets/images/icon button.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiDownload } from "react-icons/hi";
import transactionlogo1 from "../../src/assets/images/transaction-img1.png";
import transactionlogo2 from "../../src/assets/images/transaction-img2.png";
import transactionlogo3 from "../../src/assets/images/transaction-img-3.png";
import transactionlogo4 from "../../src/assets/images/transaction-img-4.png";
import transactionlogo5 from "../../src/assets/images/transaction-img-5.png";
import transactionlogo6 from "../../src/assets/images/transaction-img-6.png";
import transactionlogo7 from "../../src/assets/images/transaction-img-7.png";
import transactionlogo8 from "../../src/assets/images/transaction-img-8.png";
import transactionlogo9 from "../../src/assets/images/transaction-img-9.png";

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
        images: transactionlogo1, 
        time: `${monthString}, ${dateString}, ${timeString}`,
        status:"completed",
    },
    {
      name:'Esther Howard',
      values:14255151,
      Amount:"$70",
      images: transactionlogo2, 
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"cancelled", 
    },
    { 
      name:'Ronald Richards',
      values:14255151,
      Amount:"$250",
      images: transactionlogo3,
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"completed", 
    },
    {
      name:'Theresa Webb',
      values:14255151,
      Amount:"$1200",
      images: transactionlogo4,
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"completed", 
    },
    {
      name:'Floyd Miles',
      values:14255151,
      Amount:"$220",
      images: transactionlogo5,
      time: `${monthString}, ${dateString}, ${timeString}`,
      status:"completed", 
  },
  {
    name:'Esther Howard',
    values:14255151,
    Amount:"$70",
    images: transactionlogo6,
    time: `${monthString}, ${dateString}, ${timeString}`,
    status:"cancelled", 
},
{
  name:'Ronald Richards',
  values:14255151,
  Amount:"$250",
  images: transactionlogo7,
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"completed", 
},
{
  name:'Esther Howard',
  values:14255151,
  Amount:"$70",
  images: transactionlogo8,
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"cancelled",
},
{
  name:'Ronald Richards',
  values:14255151,
  Amount:"$250",
  images: transactionlogo9,
  time: `${monthString}, ${dateString}, ${timeString}`,
  status:"completed",
  
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
                  <p className='mb-auto dash-head-1 new-dash-head-1'>Transaction History</p>
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
            <div className='transaction-new-tables transaction-table-full-00'>
              <table className="table px-5 table table-spacing transaction-table-full-01">
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
                    let backgroundcolor;

                    if (index < 1) {
                      statusColor = 'green';
                    } else if (index >= 1 && index < 2) {
                      statusColor = 'rgba(243, 99, 79, 1)';
                      backgroundcolor='rgba(252, 67, 41, 0.1)'
                    }  
                    else if (index >= 2 && index < 5) {
                      statusColor = 'rgba(69, 194, 24, 1)';
                      backgroundcolor='#ecf9e8'
                    }
                    else if (index >= 5 && index < 6) {
                      statusColor = 'rgba(243, 99, 79, 1)';
                      backgroundcolor='rgba(252, 67, 41, 0.1)';
                    }
                    else if (index >= 6 && index < 7) {
                      statusColor = 'rgba(69, 194, 24, 1)';
                      backgroundcolor='#ecf9e8'
                    }
                    else if (index >= 7 && index < 8) {
                      statusColor = 'rgba(243, 99, 79, 1)';
                      backgroundcolor='rgba(252, 67, 41, 0.1)';
                    }
                    else if (index >= 8 && index < 9) {
                      statusColor = 'rgba(69, 194, 24, 1)';
                      backgroundcolor='#ecf9e8'
                    }
                    else {
                      statusColor = 'default';
                    }

                    return (
                      <tr key={index} className='new-mark-relegious-01  table-row-padding'>
                        <td className="transaction-table-td-01">
                          <div className=''>
                          {index + 1}
                            </div>
                            </td>
                        <td className="transaction-table-td-01">
                          <div className=''>
                          <LazyLoadImage src={item.images} alt={item.name} className='transaction-img me-2' style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                          {item.name}
                            </div>
                            </td>
                        <td className="transaction-table-td-01 transaction-table-td-02">
                          <div className=''>
                          {item.values} <HiDownload className='text-dark' />
                            </div></td>
                        <td className="transaction-table-td-01">
                          <div className=''>
                          {item.Amount}
                            </div></td>
                        <td className="transaction-table-td-01 transaction-table-td-02">
                          <div className=''>
                          {item.time}
                            </div></td>
                        <td className="transaction-table-td-01 transaction-table-td-03" >
                          <div className=''>
                          <button className='py-1 px-2 border-0 complete-cancelled-btn' style={{ color: statusColor,background: backgroundcolor}}>{item.status}</button>
                            </div></td>
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
