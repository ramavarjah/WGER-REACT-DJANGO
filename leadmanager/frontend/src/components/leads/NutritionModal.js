import { Modal, Button } from 'antd';
import React from 'react';

/* eslint-disable */

export class NutritionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <>
        <Button style={{    position: 'relative',
    top: 31,
    left: 199,
    width: 320,
    borderRadius: 98}} type="primary" onClick={this.showModal}>
         Add New dairy Entry
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
export default NutritionModal;
