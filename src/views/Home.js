import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHtml from 'react-render-html';

import { getAllTour } from '../store/actions/tour';

class Home extends Component {
	componentDidMount() {
		this.props.getAllTour();
	}
	render() {
		return (
			<main className="main">
				<div className="card-container">
					{this.props.tours.tours.tours &&
						this.props.tours.tours.tours.map((item) => {
							return (
								<div className="card" key={item.slug}>
									<div className="card__header">
										<div className="card__picture">
											<div className="card__picture-overlay">&nbsp;</div>
											<img
												src={`http://localhost:8080/${item.image}`}
												alt={item.slug}
												className="card__picture-img"
											/>
										</div>
										<h3 className="heading-tertirary">
											<span>{item.name}</span>
										</h3>
									</div>
									<div className="card__details">
										<h4 className="card__sub-heading">Easy {item.duration}-day tour</h4>
										<div className="card__text">{renderHtml(item.description.slice(0, 180))}</div>
									</div>
									<div className="card__footer">
										<p>
											<span className="card__footer-value">${item.price}</span>
											<span className="card__footer-text">per person</span>
										</p>
										<p className="card__ratings">
											<span className="card__footer-value">{item.ratingsAverage}</span>
											<span className="card__footer-text">rating ({item.ratingsQuantiyt})</span>
										</p>
										<Link to={`/pages/${item.slug}`} className="btn btn--green btn--small">
											Details
										</Link>
									</div>
								</div>
							);
						})}
				</div>
			</main>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		tours: state.tours
	};
};
export default connect(mapStateToProps, { getAllTour })(Home);
