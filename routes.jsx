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
		ReactLayout.render(Main, { content:<CourseList contentOverview='overview'/> });
		
	}
});

FlowRouter.route('/overview/:_id', {
	name: 'course',
	action(params){ 
		ReactLayout.render(Main, {content: <CourseList courseId={params._id} />});
	}
});

