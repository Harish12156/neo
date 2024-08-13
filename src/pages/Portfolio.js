import React from 'react'
import '../assets/css/var.css';
import { FaSquareArrowUpRight, FaSuperscript } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import ReactApexChart from 'react-apexcharts';
// import { Line } from 'react-chartjs-2';
import ApexCharts from 'react-apexcharts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Portbitcoin from "../assets/images/portfolio-bitcoin-img.png"
import Ethereum from "../assets/images/portfolio-classic.png"


import Litecoin from "../assets/images/portfolio-lite-coin.png"
function Portfolio() {
  
  const dates = [
    { x: new Date('2023-03-01').getTime(), y: 200 },
    { x: new Date('2023-03-02').getTime(), y: 210 },
    { x: new Date('2023-03-03').getTime(), y: 200 },
    { x: new Date('2023-03-04').getTime(), y: 220 },
    { x: new Date('2023-03-05').getTime(), y: 210 },
    { x: new Date('2023-03-06').getTime(), y: 218 },
    { x: new Date('2023-03-07').getTime(), y: 200 },
    { x: new Date('2023-03-08').getTime(), y: 227 },
    { x: new Date('2023-03-09').getTime(), y: 180 },
    { x: new Date('2023-03-10').getTime(), y: 196 },
    { x: new Date('2023-03-11').getTime(), y: 170 },
    { x: new Date('2023-03-12').getTime(), y: 198 },
    { x: new Date('2023-03-13').getTime(), y: 180 },
    { x: new Date('2023-03-14').getTime(), y: 200 },
    { x: new Date('2023-03-15').getTime(), y: 150 },
    { x: new Date('2023-03-16').getTime(), y: 190 },
    { x: new Date('2023-03-17').getTime(), y: 140 },
    { x: new Date('2023-03-18').getTime(), y: 180 },
    { x: new Date('2023-03-19').getTime(), y: 120 },
    { x: new Date('2023-03-20').getTime(), y: 160 },
    { x: new Date('2023-03-21').getTime(), y: 130 },
    { x: new Date('2023-03-22').getTime(), y: 170 },
    { x: new Date('2023-03-23').getTime(), y: 150 },
    { x: new Date('2023-03-24').getTime(), y: 190 },
    { x: new Date('2023-03-25').getTime(), y: 140 },
  ];

  const options = {
    series: [{
      name: 'XYZ MOTORS',
      data: dates
    }],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      width: '100%',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom',
        show: false,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#8950DA']
    },
    borderColor: '#FF0000',
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 4, 
      colors: ['#8950DA'], 
      strokeColors: '#8950DA',
      strokeWidth: 2,
    },
    title: {
      
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      }
    },
    xaxis: {
      type: 'category',
      categories: ['5k', '10k', '15k', '20k', '25k', '30k', '35k'],
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100],
          colorStops: [
              {
                  offset: 0,
                  color: '#8950DA',
                  opacity: 0.7
              },
              {
                  offset: 100,
                  color: '#8950DA',
                  opacity: 0.2
              }
          ]
      }
  },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val).toFixed(0);
        },
      },
      title: {
        text: 'Price',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        }
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '10px'
        }
      },
    },
    tooltip: {
      shared: false,
      x: {
        format: 'dd MMM',
      },
      y: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    }
  };

  return (
    <div>
      <div className='container-fluid'>

      <div className='row my-2 px-3 zoomable-apex-chart-top'>
        <div className='col-lg-12 zoomable-apex-chart'>
        <div className='d-lg-flex justify-content-between pt-4 px-lg-2 whole-points-apex-chart'>
            <div><sup className='apex-dollar-btn'>$ </sup><span className='apex-new-row-numbers'>3456789</span><sup className='apex-new-percentage-chart'>  +3.18%</sup></div>
            <div className='d-flex align-item-center'>
              <button className='aaa-01'>Line Chart</button>
              <button className='aaa-02'>Statistics</button>
              <select class="form-select alt-apex-week-selector ms-2" aria-label="Default select example">
  <option selected>1 Week</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </div>
          </div>
        <div id="chart"  className='py-2'>
        <ReactApexChart options={options} className="mx-auto apex-custom-chart-height" series={options.series} type="area" height={400} width="98%" />
            </div>
        </div>
      </div>

      <div className='row portfolio-whl-nav-tabs'>
        <div className='col-lg-12'>
          <div className='portfolio-asset-page'>
         <div className='d-flex align-items-center justify-content-between portfoli-my-asset-sec alt-portfoli-my-asset-sec px-3 py-3'>
          <div>
          <h5 class="dash-head-1 mb-4">My Assets</h5>
          {/* <p className='mb-auto'>MyAsset</p> */}
          </div>
          <div>
          <nav>
            <div>

            </div>
            <div className='d-flex align-items-center'>
              <div className='me-2'>
              <button className='apex-new-link-40'>
                List
              </button>
              <button className='apex-new-charts-40'>Charts</button>
              </div>
             
            </div>

</nav>
          </div>

         </div>
         <div className='px-3 portfolio-whl-table-1 py-3' >
         <table class="table apex-chart-customize-table ">
  <thead className='portfolio-none-border-sec'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Porfolio%</th>
      <th scope="col" className='table-bal-ctn'>Balance</th>
      <th scope="col" className='table-bal-Price'>Price 24h</th>
      <th scope="col" className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-values-rows'>
    <td className='table-values'>1</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-01'>
      <LazyLoadImage alt="Profile-picture" src={Portbitcoin} className='pro-pic  img-fluid me-2' />

          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Bitcoin</span><br/>BTC</p>
        </div>
      </td>
      <td>
      <div class="progress first-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='mb-auto port-new-bitcoin-20'>32%</p>
      </td>
      <td>
        <div className='text-end'>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>1,094</span><br/>
          <span className='port-new-bitcoin-20'>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>$34.50</span><br/>
          <span className='bitcoin-per-point port-new-bitcoin-20'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img'/>
</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal className='portfolio-horizontal-lines'/></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>2</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-01'>
      <LazyLoadImage alt="Profile-picture" src={Portbitcoin} className='pro-pic  img-fluid me-2 ' />

          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Bitcoin Cash</span><br/>BCH</p>
        </div>
      </td>
      <td>
      <div class="progress second-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='mb-auto port-new-bitcoin-20'>10%</p>
      </td>
      <td>
        <div className='text-end'>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>1,094</span><br/>
          <span className='port-new-bitcoin-20'>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>$34.50</span><br/>
          <span className='bitcoin-per-point port-new-bitcoin-20'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img'/>
</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal className='portfolio-horizontal-lines'/></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>3</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-01'>
      <LazyLoadImage alt="Profile-picture" src={Ethereum} className='pro-pic  img-fluid me-2 ' />

          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Ethereum</span><br/>ETH</p>
        </div>
      </td>
      <td>
      <div class="progress third-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='mb-auto port-new-bitcoin-20'>63%</p>
      </td>
      <td>
        <div className='text-end'>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>1,094</span><br/>
          <span className='port-new-bitcoin-20'>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>$34.50</span><br/>
          <span className='bitcoin-per-point-red port-new-bitcoin-20'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>
        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal className='portfolio-horizontal-lines'/></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>4</td>

    <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-001'>
      <LazyLoadImage alt="Profile-picture" src={Ethereum} className='pro-pic  img-fluid me-2 ' />

          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Ethereum Classic</span><br/>ETC</p>
        </div>
      </td>
      {/* <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-001'>
          <LazyLoadImage alt="Profile-picture" src={Ethereum} className='pro-pic  img-fluid me-2 ' />
          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Ethereum Classic</span><br/>ETC</p>
        </div>
      </td> */}
      <td>
      <div class="progress fourth-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='mb-auto port-new-bitcoin-20'>22%</p>
      </td>
      <td>
        <div className='text-end'>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>1,094</span><br/>
          <span className='port-new-bitcoin-20'>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>$34.50</span><br/>
          <span className='bitcoin-per-point-red port-new-bitcoin-20'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>

        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal className='portfolio-horizontal-lines'/></td>
    
    </tr>
    <tr className='table-values-rows'>
    <td className='table-values'>5</td>
      <td>
        <div className='d-flex align-items-center'>
          <p className=' mb-auto new-img-btc-01'>
      <LazyLoadImage alt="Profile-picture" src={Litecoin} className='pro-pic  img-fluid me-2 ' />

          </p>
          <p className='mb-auto port-new-bitcoin-20'><span className='new-adding-bit-coin'>Litecoin</span><br/>LTC</p>
        </div>
      </td>
      <td>
      <div class="progress fifth-portfolio-progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
 
</div>
<p className='mb-auto port-new-bitcoin-20'>2%</p>
      </td>
      <td>
        <div className='text-end'>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>1,094</span><br/>
          <span className='port-new-bitcoin-20'>$10.789.78</span>
        </div>
      </td>
      <td scope="col" className='table-bal-Price'>
        <div>
          <span className='port-new-bitcoin-20 new-adding-bit-coin'>$34.50</span><br/>
          <span className='bitcoin-per-point-red port-new-bitcoin-20'>6.28%<FaSquareArrowUpRight  className='portfolio-arr-img-001'/>

</span>

        </div>
      </td>
      <td scope="col" className='text-center'><HiDotsHorizontal className='portfolio-horizontal-lines'/></td>
    
    </tr>
  </tbody>
</table>
         </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Portfolio
