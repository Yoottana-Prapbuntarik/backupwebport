import React,{ Component } from 'react';
import { Jumbotron ,Button} from 'reactstrap';

class jumbotron extends Component{
    render(){
        let {jSubject ,jTitle,jDetail} = this.props;
        return(
            <div>
            <Jumbotron className="text-center w-80 my-3 " style={{ marginLeft: "auto",
            marginRight: "auto" ,backgroundColor:'#333',color:'#fff'}}>
            <h3 className="display-4">{jSubject}</h3>
            <p className="lead">{jTitle}</p>
             <hr className="my-2" />
            <p>{jDetail} <br/>
            </p>
            <p className="lead">
          <Button color="primary">Read more</Button>
             </p>
                </Jumbotron>
                </div>
        );
    }
}  

// const mapStateToProps = (state) => ({getData : state})  
export default jumbotron;
