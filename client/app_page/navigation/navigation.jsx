Navigation = React.createClass({
	render(){
		return (
			<nav className="blue-grey darken-1">
				<ul id="nav-links" className='right'>
					<li><AccountsUIWrapper /></li>
					<a href="#" className="brand-logo">Logo</a>
				</ul>
				<ul id="slide-out" className="side-nav fixed">
					<li><Profile /></li>
				   	<li><a href="/overview/">My Courses</a></li>
				   	<li><a href="#!">References</a></li>
				   	<li><a href="#!">Explore Courses</a></li>
				</ul>
				<ul id="slide-out" className="side-nav">
					<li><Profile /></li>
				   	<li><a href="/overview/">My Courses</a></li>
				   	<li><a href="#!">References</a></li>
				   	<li><a href="#!">Explore Courses</a></li>
				</ul>

				<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
			</nav>
		);
	}
});