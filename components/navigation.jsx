Navigation = React.createClass({
	render(){
		return (
			<nav>
				<ul id="nav-links" className='right'>
					<li><AccountsUIWrapper /></li>
					<a href="#" class="brand-logo">Logo</a>
				</ul>
				<ul id="slide-out" className="side-nav fixed">
					<li><Profile /></li>
				   	<li><a href="#!">My Courses</a></li>
				   	<li><a href="#!">Explore Courses</a></li>
				   	<li><a href="#!">References</a></li>
				</ul>
				<ul id="slide-out" className="side-nav">
					<li><Profile /></li>
				   	<li><a href="#!">My Courses</a></li>
				   	<li><a href="#!">References</a></li>
				</ul>

				<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
			</nav>
		);
	}
});