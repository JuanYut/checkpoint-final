import React from "react";
import { Button, DatePicker } from "antd";
import Personal from "../Personal/Personal";

const HomeComponent = () => {
  return (
    <div>
      <DatePicker />
      <Personal />
      <Button type="danger">Picame</Button>
      <h1>I am the Home</h1>
    </div>
  );
};

export default HomeComponent;
