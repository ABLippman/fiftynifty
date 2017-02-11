import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Link as UnwrappedLink} from 'react-router';
const Link = Radium(UnwrappedLink);
let styles;

export const HowToPlay  = React.createClass({

	propTypes: {
		localUser: PropTypes.object,
	},

	render() {
		const localUserId = this.props.localUser.id;
		return (
			<div style={styles.section}>
				<div style={styles.content}>
				<div style={styles.sectionHeader} id="howToPlay">How to Play</div>
				<Link to={localUserId ? `/${localUserId}` : '/#join'} style={styles.howToPlaySection} className={'pt-card pt-elevation-3'}>
					{/*this should link to settings on the user page when we have settings*/}
					<img style={styles.sectionImage} src={"static/Icon1.png"}/>

					<div style={styles.sectionText}>
						<div style={styles.sectionTitle}>Join</div>
						Join the challenge by
						filling in your details. This
						way we can tell you who
						your Representative and Senators are.
					</div>
				</Link>

				<Link to={localUserId ? `/${localUserId}` : '/#join'} style={styles.howToPlaySection} className={'pt-card pt-elevation-3'}>
					<img style={styles.sectionImage} src={"static/Icon2.png"} />
					<div style={styles.sectionText}>
						<div style={styles.sectionTitle}>Use your voice</div>
						Call your Representative or Senator and talk
						to them about an issue you choose.
					</div>
				</Link>

				<Link to={localUserId ? '/#invite' : '/#join'} style={styles.howToPlaySection} className={'pt-card pt-elevation-3'}>
					<img style={styles.sectionImage} src={"static/Icon3.png"} />
					<div style={styles.sectionText}>
						<div style={styles.sectionTitle}>Spread your influence</div>
						Share the link with your friends in other states, when someone in your network does the same, you get the points.
					</div>
				</Link>
				<Link to={'/leaderboard'} style={styles.howToPlaySection} className={'pt-card pt-elevation-3'}>
					<img style={styles.sectionImage} src={"static/Icon4.png"} />
					<div style={styles.sectionText}>
						<div style={styles.sectionTitle}>Collect 'em all!</div>
						When you get someone from all 50 states to make a call, you win!
					</div>
				</Link>

				<Link to={'/about'}>
					<p style={styles.learnMore}><button style={{color:'white'}} type="button" className="pt-button pt-minimal pt-icon-add" >Learn More</button></p>
				</Link>
				</div>
			</div>
		)
	}

});

export default Radium(HowToPlay);


styles = {
	section: {
		backgroundColor:"#003d59",
		padding: '2em 1em',
		margin: '0 auto',
		backgroundSize:'cover',
		fontWeight: 'lighter',
	},
	sectionHeader: {
		fontSize: '2em',
		fontWeight: 'lighter',
		marginBottom: '1.5em',
		textAlign:'center',
		color:'white',
		letterSpacing:'0.1em',
	},
	howToPlaySection: {
		// display:'table-cell',
		position: 'relative',
		display: 'inline-block',
		textDecoration: 'none',
		width:'48%',
		margin: '0px 1% 10px',
		textAlign:'left',
		height: 150,
		verticalAlign: 'top',
		padding: '1.75em 1em',
		color:'white',
		backgroundColor: 'rgba(255, 255, 255, 0.25)',
		'@media screen and (min-resolution: 3dppx), screen and (max-width: 767px)': {
			width: '100%',
			margin: '0px 0px 10px',
			height: 'auto',
			minHeight: '150px',
		},
	},
	sectionImage: {
		position: 'absolute',
		width: '50px',
		left: 15,
		top: 25,
	},
	sectionText: {
		paddingLeft: '75px'
	},
	sectionTitle: {
		fontWeight: '600',
		fontSize: '1.2em',
		paddingBottom: '0.5em',
	},
	learnMore: {
		textAlign:'center',
		color:'white',
		padding:'1em',
	},
	content:{
		maxWidth:'800px',
		margin: '0 auto',
	},
};
