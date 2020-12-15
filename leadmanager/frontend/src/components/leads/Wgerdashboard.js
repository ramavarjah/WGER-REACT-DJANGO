import axios from 'axios';
import React, { Component, Fragment } from 'react'
// import {
//   makeStyles
// } from '@material-ui/core';
// import Page from 'src/components/Page';
import { Table, Row } from 'antd';
import 'antd/dist/antd.css';
import './Index.css';
import { AddWeightLogModal } from './AddWeightLogModal';
import { NutritionModal } from './NutritionModal.js';
import { WeightModal } from './WeightModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkout , deleteWorkout } from '../../actions/workouts';



// const data =   this.props.workouts.map(workout =>
//     key= workout.id,
//     description= workout.description,
//     // address: `London, Park Lane no. ${i}`,
  
//   )


// const data = [];

// data.push(this.props.workouts.map(workout => workout.description, workout.id ))


// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }


// const data = this.props.workouts.map(workout => ({ key: workout.id, Workout: workout.description }));




const dataSource = [
  {
    key: '1',
    Day: 'Sunday',
    Workout: "RestDay",
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Monday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },

  {
    key: '3',
    Day: 'Tuesday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '4',
    Day: 'Wednesday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '5',
    Day: 'Thursday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Friday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Saturday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Day',
    dataIndex: 'Day',
    key: 'Day'
  },
  {
    title: 'Workout',
    dataIndex: 'Workout',
    key: 'Workout'
  }
];



export class Wgerdashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }

  static propTypes = {
    workouts: PropTypes.array.isRequired,
    getWorkout: PropTypes.func.isRequired,
    deleteWorkout: PropTypes.func.isRequired,
  };

  // componentDidMount() {
  //   axios.get(`http://127.0.0.1:8000/api/manager/`)
  //     .then(res => {
  //       const users = res.data;
  //       // this.setState({ users });
  //       console.log(users)
  //     })
  // }
  componentDidMount(){
    this.props.getWorkout();
    // console.log(this.props.getWorkout(),"Test")
  }
  // componentDidMount() {
  //   this.props.getWorkout();
  //   console.log(val,"test")
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const { visible, descinput, test } = this.state;
  //   const workout = { visible, descinput, test };
  //   this.props.addWorkout(workout);
  //   this.setState({
  //     visible: '',
  //     descinput: this.props.data.decsription,
  //     test: '',
  //   });
  // };

  render() {

    const data = this.props.workouts.map(workout => ({
      Day: workout.day,
      key: workout.id,
      Workout: workout.description
    }))


    return (
      
      <Fragment>
      <div>
         {/* <Page className={classes.root} title="Dashboard"> */}
      <h1 style={{ position: 'relative', left: 27 }}>
        Workout
         </h1>
  
      <Row className="Dashboard_grid">
<Table pagination={false} dataSource={data} columns={columns} />
      {/* ))} */}
        <Row>
          <h1 style={{ position: 'relative', top: -53, left: 119 }}>Nutrition</h1>
        </Row>
        <Row>
        <Table
          style={{ position: "relative",left: -70 }}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        </Row>
        <h1 style={{ position: 'relative', top: -53, left:11 }}>
          Weight Log
        </h1>
        <Row>
        <Table
        style={{
          position: "relative",
          left: -212
        }}
          // style={{
          //   left: 179}}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        </Row>
      </Row>
      <Row>
      <AddWeightLogModal />
      <NutritionModal />
      <WeightModal />
      </Row>
      {/* <Button type="primary">Modal</Button>
      <Button type="primary">Modal</Button> */}
    {/* </Page> */}
      </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  workouts: state.workouts.workouts,
});


export default connect(mapStateToProps, { getWorkout, deleteWorkout })(Wgerdashboard);