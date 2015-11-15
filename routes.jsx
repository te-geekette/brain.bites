FlowRouter.wait();

FlowRouter.route('/', {
	name: 'landing',
	triggersEnter: [function(context, redirect){
		if(Meteor.user()) {
			redirect('/overview');
		}
	}],
	action(){
		ReactLayout.render(Landing);
	}
});


FlowRouter.route('/overview', {
	name: 'overview',
	action(){ 
		ReactLayout.render(Main, { content:<CourseList /> });
	}
});

FlowRouter.route('/overview/:_id', {
	name: 'course',
	action(params){ 
		ReactLayout.render(Main, {content: <CourseList courseId={params._id} />});
	}
});

let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

FlowHelpers = {
  pathFor: pathFor
};

