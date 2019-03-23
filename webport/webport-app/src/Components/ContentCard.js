import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container  
} from 'reactstrap';
import '../Assets/css/styles.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {compose} from 'recompose';

class ContentCard extends Component {

  render() {
    let { title, sTitle, Text, imgSrc , getId} = this.props;
  
    return (
      <div>
        <Container className="wrap-card-img my-5">
          <div className="shadows"  style={{maxHeight:'320px', overflow:'auto'}}>
            <Card >
              <NavLink className="wrapper-card-img"  to={"/Portdetail/" + getId} >
                <CardImg className="card-img-top text-center h-100" src={imgSrc} alt="Card image cap" />
              </NavLink>
              <CardBody className="text-center" >
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>
                  {sTitle}
                </CardSubtitle>
                <CardText>
                  {Text}
                  <Link className=" btn btn-primary w-100"  style={{marginTop:'50%'}} to={'/Portdetail/' + getId} >
                  อ่านต่อ
                </Link>
                </CardText>

              </CardBody>

            </Card>


          </div>
        </Container>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({stateInStore : state})
export default compose(connect(mapStateToProps))(ContentCard);
