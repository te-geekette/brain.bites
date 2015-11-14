Main = React.createClass({
	render() {
		return ( 
			<div>
				<header>
					<Navigation />
				</header>
				<main>
					<div className='container'>
						{this.props.content}
					</div>
				</main>
			</div>
		);
	}
});
