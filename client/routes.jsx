// ROUTERS //

// has to wait to not interfere with meteor's onStartup function
FlowRouter.wait();


// Landing page route 

var public = FlowRouter.group({});

public.route('/', {
	name: 'landing',
	triggersEnter: [function(context, redirect){
		if(Meteor.user()) {
			redirect('/overview');
		}
	}],
	action(){
		ReactLayout.render(Landing, {loginOrSignup : 'Sign up', loginButton: 'Login'});
	}
});

public.route('/login', {
	name: 'login', 
	action(){
		ReactLayout.render(Landing, {loginButton: 'Sign up'});
	}
})

// In-App routes 

var loggedIn = FlowRouter.group({
});

loggedIn.route('/overview', {
	name: 'overview',
	triggersEnter: [function(context, redirect){
		var isNoUser = Meteor.user() === null;
		var isNotLoggingIn = Meteor.loggingIn() === false;

		console.log(isNotLoggingIn, isNoUser,);

		if( isNotLoggingIn && isNoUser ){ 
			 redirect('/login'); 
		}
	}],
	action(){ 
		ReactLayout.render(Main, { displayContent:'overview' });
		
	}
});

loggedIn.route('/overview/:_id', {
	name: 'course',
	action(params){ 
		ReactLayout.render(Main, { courseId: params._id });
	}
});

loggedIn.route('/explore', {
	name: 'explore',
	action(params){ 
		ReactLayout.render(Main, {displayContent: 'explore', hideButton: 'hidden'});
	}
});
