Progress = React.createClass({

	showProgress(){
		var progress = document.getElementById('bar-percentage');
		var percentage = Math.ceil(progress.dataset.percentage);

		progress.textContent(percentage); 
		progress.nextSibling.children.style.width = percentage * '%'; 
	},

	render(){
		return(
			<div id="bar-1" className="bar-main-container light-blue accent-4">
    			<div className="wrap">
	      			<div className="bar-percentage" data-percentage={this.props.duration} >{this.props.duration}</div>
	      			<div className="bar-container">
	        			<div className="bar"></div>
	      			</div>
    			</div>
  			</div>
		);
	}
});

// build this: http://www.bypeople.com/percentage-bar-cssdeck/

// $('.bar-percentage[data-percentage]').each(function () {
//   var progress = $(this);
//   var percentage = Math.ceil($(this).attr('data-percentage'));
//   $({countNum: 0}).animate({countNum: percentage}, {
//     duration: 2000,
//     easing:'linear',
//     step: function() {
//       // What todo on every count
//     var pct = '';
//     if(percentage == 0){
//       pct = Math.floor(this.countNum) + '%';
//     }else{
//       pct = Math.floor(this.countNum+1) + '%';
//     }
//     progress.text(pct) && progress.siblings().children().css('width',pct);
//     }
//   });
// });