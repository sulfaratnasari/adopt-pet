import React from "react";
import {Row, Col,Input, Button} from 'antd'

import './Search.css'

function Search() {
  return (
    <div className="search">
      <Row style={{marginBottom:'0.25rem'}}>
        <Col span={6} offset={6} className="col-left">
          <Input placeholder="Jenis Peliharaan"/>
        </Col>
        <Col span={6}  className="col-right">
          <Input placeholder="daerah"/>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6} className="col-left">
          <Input placeholder="Brider"/>
        </Col>
        <Col span={4} className="col-right">
          <Input placeholder="Age"/>
        </Col>
        <Col className="col-button">
          <Button>Search</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
