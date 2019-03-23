import React, { Component } from 'react';
import './Assets/css/styles.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Portfolio from './Pages/Portfolio';
import Portdetail from './Components/Portdetail';
import top from './Assets/images/up.ico';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			scrolling: '',
			myItems: [],
			isLoaded: false,

		}



		this.handleScroll = this.handleScroll.bind(this);

	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if (window.scrollY === 0 && this.state.scrolling === true) {
			this.setState({ scrolling: false });

		}
		else if (window.scrollY !== 0 && this.state.scrolling !== true) {
			this.setState({ scrolling: true });
		}
		console.log(window.scrollY);
	}
	toTop() {
		console.log("click");
		window.scroll({ top: 0, behavior: 'smooth' });

	}

	render() {

		return (
			<div>
				<BrowserRouter>
					<div >
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home}>
							</Route>
							<Route path="/About" component={About}>
							</Route>
							<Route path="/Portfolio" component={Portfolio} >
							</Route>
							<Route path="/Contact" component={Contact} >
							</Route>
							<Route path="/Portdetail" component={Portdetail}>
							</Route>
							<Route component={Error} />
						</Switch>
					</div>
				</BrowserRouter>
			

				<img src={top} className="to-top" onClick={this.toTop} alt="scroll to top" />
			
			</div>
		);
	}

}

export default App;
