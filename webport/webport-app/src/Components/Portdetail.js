import React, { Component } from "react";
import Semifooter from '../Components/Semifooter';
import fetch from 'isomorphic-fetch';
import { compose } from 'recompose';
import { connect } from 'react-redux';


class Portdetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			getDetail: {
				title: null,
				detail: null,
				img: null
			}

		}

	}
	componentDidMount() {
		fetch('http://localhost:4001/Portdetail/' + 1)
			.then((res) => res.json())
			.then(({ data }) => {
				console.log(data[0]);

				let detail = data[0];

				this.setState({
					getDetail: detail
				})

			});

	}
	render() {
		return (
			<div style={{ marginTop: 350, textAlign: "center" }}>

				<h1>{this.state.getDetail.title}</h1>
				<img src={this.state.getDetail.img} alt="img portdetail" style={{
					width: '500px', marginLeft: "auto",
					marginRight: "auto", marginTop: '5px', marginBottom: '5px'
				}} />
				<h5>{this.state.getDetail.detail}</h5>

				<Semifooter />

			</div>
		);
	}
}
const mapStateToProps = (state) => ({ stateInStore: state })
export default compose(connect(mapStateToProps))(Portdetail); 
