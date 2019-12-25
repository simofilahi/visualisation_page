import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {Bubble} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div class="container my-container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <Pie data={data}  width= '100%' height='80%'/>
            </div>
            <div class="col-md-4 col-sm-6">
              <Pie data={data} width= '100%' height='80%'/>
            </div>
            <div class="col-md-4 col-sm-6">
              <Pie data={data} width= '100%' height='80%'/>
            </div>
            <div class="col-md-4 col-sm-6">
              <Pie data={data} width= '100%' height='80%'/>
            </div>
            <div class="col-md-4 col-sm-6">
              <Pie data={data} width= '100%' height='80%'/>
            </div>
            <div class="col-md-4 col-sm-6">
              <Pie data={data} width= '100%' height='80%'/>
            </div>
          </div>
      </div>      
    );
  }
}

export default App;