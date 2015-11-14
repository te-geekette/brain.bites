CourseHeaderCreate = React.createClass({
	render(){
		return (
			<li id="create-course" className={this.props.className}> 
				<div className="row">
					<div className="col s12">
						<div className="card cyan ligthen-5">
							<div className="card-content text-cyan text-darken-4">
								<div className="card-title">You can edit me</div>
								<div>Edit my description</div>
								<div>Some length</div> 	
								<p>And here is some content</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	},
});