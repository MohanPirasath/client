// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'; 
// import NewEntery from './Pages/NewEntery';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'



function App() {
  return (
    <div className="App">
     {/* <NewEntery  /> */}
     <Coin />
    </div>
  );
}


function Coin(){
  const [state,setstate]=useState({
          
    series: [{
      name: 'growth',
      data: [0, 40, 15, 50,30, 25, 55, 70,30,90,70,40,32,6,15,0]
    },
  
    ],
    options: {
      // theme:{
      //   mode:"dark"
      // },
      chart: {
        id: 'apexchart-example',
        type: 'area',
        stacked: true,
        height: 200,
        width: 180,
        zoom: {
          type: 'x',
          // enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      grid:{
        show:false,
        xaxis:{
          lines:{
            show:false
          }

        },
        yaxis:{
          lines:{
            show:false
            // show:true
          }

        },
      },
      dataLabels: {
        // enabled: true
        enabled: false
      },
      legend:{
        show:false
      },
      markers: {
        size: 0,
      },
      // title: {
      //   text: 'Stock Price Movement',
      //   align: 'left'
      // },
      fill: {
        // type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      style:{color:"Red"},
      yaxis: {
        labels: {
          // show:true
          show:false

          // formatter: function (val) {
          //   return  (val / 1000000).toFixed(0);
          // },
        },
        // title: {
        //   text: 'Price'
        // },
        
      },
      xaxis: {
        tickPlacement:"hidden",
        axisBorder:{
          show:false
        },
        categories: ["1jan","2jan",'3jan',"4jan","5jan","6jan",'7jan',"8jan","9jan",'10jan','11jan',"12jan","13jan","14jan",'15jan',"16jan"],
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        type: 'datetime',
         labels: {
          show:false
          // formatter: function (val) {
          //   return  (val / 1000000).toFixed(0);
          // },
        },
        lines:{
          show:false
        }
      },
      tooltip: {
        shared: true,
        followCursor:true,
        // shared: false,
        y: {
          // formatter: function (val) {
          //   return (val / 1000000).toFixed(0)
          // }
        },
       
      }
    },
  
  
  }
  
  )

  return(
    <div className='Card'>
      <div>

 <Card sx={{ minWidth: 345,minHeight: 500 }}>
  <div className='First_row'>
    <div>
    <Typography gutterBottom variant="h5" component="div">
          Binance (BNB)
        </Typography>
    <Typography gutterBottom variant="h4" component="div">
          $432.09
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Gain/loss 24hr: <span className='Gain'> +8.12%</span>
        </Typography>
      
    </div>
    <div>
      <Button sx={{color:"gray"}}>15M</Button>
      <Button sx={{color:"gray"}}>1H</Button>
      <Button sx={{color:"gray"}}>4H</Button>
      <Button sx={{color:"gray"}}>24h</Button>
      <Button sx={{color:"gray"}}>1W</Button>

    </div>
  </div>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent> */}
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      <div className='chart'>
      <ReactApexChart options={state.options} series={state.series} type="line" height={250} />

      </div>
      <div className='Bottom'>
        <div className='Bottom_Child'>
        <Typography gutterBottom variant="h5" component="div">
          Market Cap
        </Typography>
        <div className="value">
          <h4 style={{fontWeight:"900"}}>

        $94.22B
          </h4>

        </div>
    {/* <Typography gutterBottom variant="h4" component="div">
          $94.22B
        </Typography> */}
          
        </div>
        <div className='Bottom_Child'>
        <Typography gutterBottom variant="h5" component="div">
          Market Cap Rank
        </Typography>

<div className="value">

<h4 style={{fontWeight:"900",paddingLeft:"3rem"}}>
#8

</h4>


</div>

    {/* <Typography gutterBottom variant="h4" component="div">
          #8
        </Typography> */}

        </div>
        <div className='Bottom__Child'>
        <Typography gutterBottom variant="h5" component="div">
          24 hr volume
        </Typography>
        <div className="value">
       <h4 style={{fontWeight:"900"}}>
       $324.22M
        </h4> 

        </div>
    {/* <Typography gutterBottom variant="h4" component="div">
          $324.22M
        </Typography> */}

        </div>
      </div>



    </Card>
    </div>
    </div>
  )
}




export default App;
