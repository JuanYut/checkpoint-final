import React from 'react';
import { Button, DatePicker } from 'antd';

const HomeComponent = () => {
  return (
    <div>
      <DatePicker />
      <Button type='danger'>Picame</Button>
      <h1>I am the Home</h1>
    </div>
  );
};

export default HomeComponent;
