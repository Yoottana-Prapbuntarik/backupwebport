import React ,{ Component } from 'react';
import {Nav, NavItem,Container,Row,Col  } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class semifooter extends Component {
    render(){
        return(
          <div>
            <Container fluid style={{marginTop:'15%',background:'rgba(252, 205, 211, 0.86)'}}>
                <Row>
                <Col md="4" sm="6" col="12" className="text-white">
                    <h2 className=" d-block text-center">ติดต่อ</h2>
                    <div className="borderbottom"></div>

                    <ul>
                    <li>
                    <span className="">ที่อยู่ : <i>ถนนพระราม 2 พันท้ายนรสิงห์ สมุทรสาคร 74000</i></span>
                    </li>
                   <li>
                    <span className="">โทรศัพท์ :<i>09-6123-8932 nap3831@gmail.com </i></span>
                    </li>
                    </ul>
                </Col>
                <Col md="4" sm="6" col="12">

         
                <h2 className=" d-block text-center text-white">Menu</h2>
                        <div className="borderbottom"></div>
            <Nav className="ml-auto text-center" navbar>
              <NavItem  className="navbarLink">
                <NavLink onClick={this.closeNav} to="/">Home</NavLink>
              </NavItem>

              <NavItem className="navbarLink">
                <NavLink onClick={this.closeNav}  to="/About">About</NavLink>
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink onClick={this.closeNav}  to="/Portfolio">Portfolio</NavLink>
              
              </NavItem>
               <NavItem className="navbarLink">
                <NavLink onClick={this.closeNav}  to="/Contact">Contact</NavLink>
              </NavItem>

            </Nav>

                </Col>
                <Col md="4" sm="6" col="12">
                
                <h2 className=" d-block text-center text-white">Contact Us</h2>
                        <div className="borderbottom"></div>
                <p className="text-white  text-center mt-5">M A P C O M I N G S O O N</p>
                </Col>    
          
          </Row>
        
          </Container>
          <div className="py-5 w-100  text-center  text-white" 
          style={{marginTop:'5%'}}> 
          CopyRight &copy; 2018 By <a href="http://fb.com/nap2539">Yoottana Prapbuntarik</a> 
          </div>
          </div>
        );
    }
}
export default semifooter;



