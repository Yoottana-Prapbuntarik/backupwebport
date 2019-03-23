import React ,{ Component } from 'react';
import Carousel from '../Components/Carousel';
import Jumbotron from '../Components/Jumbotron';
import { Container,Row,Col} from 'reactstrap';
import Semifooter from '../Components/Semifooter';
class Home extends Component{
    render(){
        return(
        <div>
        <Carousel/>
        <Container>
            <Row>
            <Col col="12"><Jumbotron  jSubject="Subject" jTitleject ="Subtitle"  jDetail ="Subtitle" /></Col>
            
            </Row>
            </Container>
            <Semifooter/>      
        </div>
            );
    }
}
export default Home;
