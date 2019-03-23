import React , {Component} from 'react';
import '../Assets/css/styles.css';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem  ,NavbarBrand} from 'reactstrap';
import {NavLink } from 'react-router-dom';
 class Navigation extends Component{
 constructor(props){
   super(props);
   this.toggle = this.toggle.bind(this);
   this.closeNav = this.closeNav.bind(this);
   this.state = {
    isOpen : false
   };
  }
  closeNav(){
    this.setState({
    isOpen : false
  
    });
  }
   toggle() {
     this.setState({
     isOpen: !this.state.isOpen
    });
   
 }
  render(){
    let myStyle={
      backgroundColor:'',
      color:'',
    }
 
  if(window.scrollY>1){
     myStyle={
      backgroundColor:'#6534ff',
      color:'#fff',
      transition: '1s',
      fontFamily: 'Prompt',
      padding:'10px',
    }
  }else{
    myStyle={
      backgroundColor:'#6534ff',
      transition: '1s',
      padding:'20px',
      fontFamily: 'Prompt'
  }
}
      return(
        <div className="mb-5">
        <Navbar style={myStyle} className="text-center fixed-top" dark  expand="md" >
        <div>
          <NavbarBrand href="/"className="container">Nap Yoottana</NavbarBrand>
          </div>
        
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
          </Collapse>
        </Navbar>
      </div>
    
      );
}
    }
export default Navigation;