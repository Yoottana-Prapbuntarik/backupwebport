import React, { Component } from 'react';
import ContentCard from '../Components/ContentCard';
import { Container, Col, Row } from 'reactstrap';
import '../Assets/css/styles.css';
import Semifooter from '../Components/Semifooter';
import fetch from 'isomorphic-fetch';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:4001/article')
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        this.setState({
          datas: data
        })

      })
  }
  render() {
    return (
      <div>
        <Container >

          <Row>
            {this.state.datas.map((data, i) =>
              <Col key={i} sm="6" md="4" col="12">
                <ContentCard imgSrc={data.img} title={data.title} sTitle={data.subtitle} getId={data.id}
                
                />
              </Col>

            )}
          </Row>
        </Container>
        
        <Semifooter />
      </div>

    );
  }
} 
export default Portfolio;