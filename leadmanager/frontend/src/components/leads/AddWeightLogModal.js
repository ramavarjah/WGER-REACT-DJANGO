import React from 'react';
/* eslint-disable */
import { Modal, Button, Checkbox, Row, Col } from 'antd';
import './AddWeightLog.css';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import wger from '../../images/Wgner.png'
import { addWorkout } from '../../actions/workouts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class AddWeightLogModal extends React.Component {
  // state = {
  //   visible: '',
  //   descinput: '',
  //   test: '',
  // };

  constructor(props) {
    super(props);
    this.state = { visible: false, descinput:"", test: ""
    };
  }

  // static propTypes = {
  //   addWorkout: PropTypes.func.isRequired,
  // };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleinputChange = (e) =>{
    this.setState({descinput:e.target.value})
    console.log(this.state.descinput,"test")
  }

handleCheck = (e, data) =>{
  const checkedvalue = e.target.value
  console.log(checkedvalue)
}

  // handleSave = e => {
  //   const data = this.state
  //   console.log(data);
  // };


  onSubmit = (e) => {
    e.preventDefault();
    const { visible, descinput, test } = this.state;
    const workout = { visible, descinput, test };
    this.props.addWorkout(workout);
    this.setState({
      visible: '',
      descinput: '',
      test: '',
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, descinput, test } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Button
          style={{
            position: 'relative',
            top: 31,
            left: 45,
            width: 320,
            borderRadius: 98
          }}
          type="primary"
          onClick={this.showModal}
        >
          Add Workout Day
        </Button>
        <Modal
          style={{ height: 321,  }}
          title="Add Weight Log"
          visible={visible}
          onSave={this.handleSave}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <h4>Description*</h4>
          <Input value={this.descinput} onChange={this.handleinputChange} style={{ height: 35 }}></Input>
          <Checkbox.Group style={{ width: '100%' }}>
            <Col>
              <h4>Day*</h4>
              <Col span={8}>
                <Checkbox
                  checked={this.state.checked}
                  name="Sunday"
                  id="Sunday"
                  value="Sunday"
                  onChange={this.handleCheck}
                >
                  Sunday
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Monday">Monday</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Tuesday">Tuesday</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Wednesday">Wednesday</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Thursday">Thursday</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Friday">Friday</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox onChange={this.handleCheck} value="Saturday">Saturday</Checkbox>
              </Col>
            </Col>
          </Checkbox.Group>

          <hr style={{ position: 'relative', top: 26 }} />
          <div style={{ position: 'relative', top: 15 }}>
            <Button
              onChange={this.handleSave}
              style={{
                borderRadius: 14,
                width: 453,
                float: 'right',
                position: 'relative',
                top: 32
              }}
              type="primary"
            >
              Save 
            </Button>
          </div>
        </Modal>
   
       </form>
    );
  }
}
// export default WeightLogModal;

export default connect(null, { addWorkout })(AddWeightLogModal);
