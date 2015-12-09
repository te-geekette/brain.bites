// ROUTERS //

// has to wait to not interfere with meteor's onStartup function
FlowRouter.wait();

// Landing page route 

var public = FlowRouter.group({});
var token = Session.get('resetPassword');

public.route('/', {
	name: 'signup',
	triggersEnter: [function(context, redirect){
		if(Meteor.user()) {
			redirect('/overview');
		}
	}],
	action(){
		ReactLayout.render(Landing, {landingContent : 'Sign up', loginButton: 'Login'});
	}
});

public.route('/login', {
	name: 'login', 
	action(){
		ReactLayout.render(Landing, {loginButton: 'Sign up'});
	}
});

public.route('/reset-password', {
	name: 'password-recovery', 
	action(){
		ReactLayout.render(Landing, { landingContent: 'Email recovery', loginButton: 'Log in' });
	}
});

public.route('/reset-password/:token', {
	name: 'password-recovery-new', 
	action(params){
		Session.set('resetPassword', params.token);
		ReactLayout.render(Landing, { landingContent: 'New password', loginButton: 'Log in' });
	}
});



// In-App routes 

var loggedIn = FlowRouter.group({
});

loggedIn.route('/overview', {
	name: 'overview',
	triggersEnter: [function(context, redirect){
		var isNoUser = Meteor.user() === null;
		var isNotLoggingIn = Meteor.loggingIn() === false;

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
		ReactLayout.render(Main, { displayContent:'course', courseId: params._id,  });
	}
});

loggedIn.route('/explore', {
	name: 'explore',
	action(params){ 
		ReactLayout.render(Main, { displayContent: 'explore', hideButton: 'hidden' });
	}
});

loggedIn.route('/explore/:_id', {
	name: 'explore',
	action(params){ 
		ReactLayout.render(Main, { courseId: params._id, displayContent: 'exploreCourse', hideButton: 'hidden' });
	}
});
