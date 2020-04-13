import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHtml from 'react-render-html';

import { getTour } from '../store/actions/tour';

class TourDetail extends Component {
	componentDidMount() {
		this.props.getTour(this.props.match.params.slug);
	}
	render() {
		if (!this.props.tour.tour) {
			return <p>Loading</p>;
		}
		const { image, name, description } = this.props.tour.tour;
		const bg = `http://localhost:8080/${image}`;

		return (
			<React.Fragment>
				<section className="section-header">
					<img src={bg} />
					<div className="heading-box">
						<h1 className="heading-primary">
							<span>{name}</span>
						</h1>
					</div>
				</section>
				<section className="section-description">
					<div className="description-box">
						<h2 className="heading-secondary ma-bt-lg">About the {name}</h2>
						<div className="description__text" style={{ whiteSpace: 'normal', wordBreak: 'break-all' }}>
							{renderHtml(description)}
						</div>
					</div>
				</section>
				<section className="section-pictures">
					<div className="picture-box">
						<img
							className="picture-box__img picture-box__img--1"
							src="img/tour-5-1.jpg"
							alt="The Park Camper Tour 1"
						/>
					</div>
					<div className="picture-box">
						<img
							className="picture-box__img picture-box__img--2"
							src="img/tour-5-2.jpg"
							alt="The Park Camper Tour 1"
						/>
					</div>
					<div className="picture-box">
						<img
							className="picture-box__img picture-box__img--3"
							src="img/tour-5-3.jpg"
							alt="The Park Camper Tour 1"
						/>
					</div>
				</section>

				<section className="section-reviews">
					<div className="reviews">
						<div className="reviews__card">
							<div className="reviews__avatar">
								<img src="img/users/user-7.jpg" alt="Jim Brown" className="reviews__avatar-img" />
								<h6 className="reviews__user">Jim Brown</h6>
							</div>
							<p className="reviews__text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos sint quo
								commodi corrupti accusantium veniam saepe numquam.
							</p>
							<div className="reviews__rating" />
						</div>

						<div className="reviews__card">
							<div className="reviews__avatar">
								<img src="img/users/user-14.jpg" alt="Laura Wilson" className="reviews__avatar-img" />
								<h6 className="reviews__user">Laura Wilson</h6>
							</div>
							<p className="reviews__text">
								Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga reiciendis provident
								deleniti cumque similique itaque animi, sapiente obcaecati beatae accusantium.
							</p>
							<div className="reviews__rating" />
						</div>

						<div className="reviews__card">
							<div className="reviews__avatar">
								<img src="img/users/user-15.jpg" alt="Ben Hadley" className="reviews__avatar-img" />
								<h6 className="reviews__user">Ben Hadley</h6>
							</div>
							<p className="reviews__text">
								Debitis, nesciunt itaque! At quis officia natus. Suscipit, reprehenderit blanditiis
								mollitia distinctio ducimus porro tempore perspiciatis sunt vel.
							</p>
							<div className="reviews__rating" />
						</div>

						<div className="reviews__card">
							<div className="reviews__avatar">
								<img src="img/users/user-6.jpg" alt="Alexander Jones" className="reviews__avatar-img" />
								<h6 className="reviews__user">Alexander Jones</h6>
							</div>
							<p className="reviews__text">
								Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam quis praesentium sed
								inventore harum aliquam veritatis at adipisci ea assumenda!
							</p>
							<div className="reviews__rating" />
						</div>

						<div className="reviews__card">
							<div className="reviews__avatar">
								<img src="img/users/user-3.jpg" alt="Ayla Cornell" className="reviews__avatar-img" />
								<h6 className="reviews__user">Ayla Cornell</h6>
							</div>
							<p className="reviews__text">
								Perferendis quo aliquid iste quas laboriosam molestias illo est voluptatem odit ea. Vero
								placeat culpa provident dicta maiores!
							</p>
							<div className="reviews__rating" />
						</div>
					</div>
				</section>

				<section className="section-cta">
					<div className="cta">
						<div className="cta__img cta__img--logo">
							<img src="img/logo-white.png" alt="Natours logo" className="" />
						</div>
						<img src="img/tour-5-2.jpg" alt="" className="cta__img cta__img--1" />
						<img src="img/tour-5-1.jpg" alt="" className="cta__img cta__img--2" />

						<div className="cta__content">
							<h2 className="heading-secondary">What are you waiting for?</h2>
							<p className="cta__text">10 days. 1 adventure. Infinite memories. Make it yours today!</p>
							<button className="btn btn--green span-all-rows">Book tour now!</button>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		tour: state.tours.tour
	};
};
export default connect(mapStateToProps, { getTour })(TourDetail);
