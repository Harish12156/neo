import React from 'react'
import '../assets/css/var.css';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
// import { Line } from 'react-chartjs-2';
import ApexCharts from 'react-apexcharts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Portbitcoin from "../assets/images/portfolio-bitcoin-img.png"
import Ethereum from "../assets/images/portfolio-classic.png"


import Litecoin from "../assets/images/portfolio-lite-coin.png"
function Portfolio() {
  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    title: {
      text: 'Portfolio Value Over Time',
      align: 'left'
    }
  };

  const series = [
    {
      name: 'Value',
      data: [
        [new Date('2024-08-01').getTime(), 30],
        [new Date('2024-08-02').getTime(), 40],
        [new Date('2024-08-03').getTime(), 35],
        [new Date('2024-08-04').getTime(), 50],
        [new Date('2024-08-05').getTime(), 45],
        [new Date('2024-08-06').getTime(), 55],
        [new Date('2024-08-07').getTime(), 60]
      ]
    }
  ];

  return (
    <div>
      <div className='container-fluid'>

        <div className='row portfolio-whl-nav-tabs'>
        <div className='col-lg-12'>
          <div className='portfolio-asset-page'>
         <div className='d-flex align-items-center justify-content-between portfoli-my-asset-sec alt-portfoli-my-asset-sec px-3 py-3'>
          <div>
          <p className='mb-auto'>MyAsset</p>
          </div>
          <div>
          <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active portfolio-nav-home-tab" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Link</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Charts</button>
    {/* <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
  </div>
</nav>
          </div>
       
{/* <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div> */}
         </div>
         <div className='px-3 portfolio-whl-table-1 py-3'>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Porfolio%</th>
      <th scope="col" className='table-bal-ctn'>Balance</th>
      <th scope="col" className='table-bal-Price'>Price 24h</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-values-rows'>
    <td className='table-values'>1</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto'>
      <LazyLoadImage alt="Profile-picture" src={Portbitcoin} className='pro-pic  img-fluid me-2' />

          </p>
          <p className='mb-auto'>Bitcoin<br/>BTC</p>
        </div>
      </td>
      <td>
      <div class="progress first-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
      </td>
      <td>
        <div className='text-end'>
          <span>1,094</span><br/>
          <span>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span>$34.50</span><br/>
          <span className='bitcoin-per-point'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img'/>
</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal /></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>2</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto'>
      <LazyLoadImage alt="Profile-picture" src={Portbitcoin} className='pro-pic  img-fluid me-2' />

          </p>
          <p className='mb-auto'>Bitcoin Cash<br/>BCH</p>
        </div>
      </td>
      <td>
      <div class="progress second-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
      </td>
      <td>
        <div className='text-end'>
          <span>1,094</span><br/>
          <span>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span>$34.50</span><br/>
          <span className='bitcoin-per-point'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img'/>
</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal /></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>3</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto'>
      <LazyLoadImage alt="Profile-picture" src={Ethereum} className='pro-pic  img-fluid me-2' />

          </p>
          <p className='mb-auto'>Ethereum<br/>ETH</p>
        </div>
      </td>
      <td>
      <div class="progress third-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
      </td>
      <td>
        <div className='text-end'>
          <span>1,094</span><br/>
          <span>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span>$34.50</span><br/>
          <span className='bitcoin-per-point-red'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal /></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>4</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto'>
          <LazyLoadImage alt="Profile-picture" src={Ethereum} className='pro-pic  img-fluid me-2' />
          </p>
          <p className='mb-auto'>Ethereum Classic<br/>ETC</p>
        </div>
      </td>
      <td>
      <div class="progress fourth-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
      </td>
      <td>
        <div className='text-end'>
          <span>1,094</span><br/>
          <span>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span>$34.50</span><br/>
          <span className='bitcoin-per-point-red'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>

        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal /></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>5</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto'>
      <LazyLoadImage alt="Profile-picture" src={Litecoin} className='pro-pic  img-fluid me-2' />

          </p>
          <p className='mb-auto'>Litecoin<br/>LTC</p>
        </div>
      </td>
      <td>
      <div class="progress fifth-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
      </td>
      <td>
        <div className='text-end'>
          <span>1,094</span><br/>
          <span>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span>$34.50</span><br/>
          <span className='bitcoin-per-point-red'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>

        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal /></td>
    
    </tr>
  </tbody>
</table>
         </div>
          </div>
        </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div>
                <div className="portfolio-chart">
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
