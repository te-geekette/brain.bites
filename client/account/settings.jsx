SettingsModal = React.createClass({

	// handleSubmit(){

	// },

	render(){
		return ( 
			<div id="modalAccountSettings" className="modal modal-fixed-footer">
				<form>
					<div className="modal-content">
			      		<h4>Change your account details</h4>
			      		<p>A bunch of text</p>
			    	</div>
			    	<div className="modal-footer">
			      		<a onClick={this.handleSubmit} className="modal-action modal-close waves-effect waves-green btn-flat ">Save</a>
			    	</div>
		    	</form>
	    	</div>
	    );
	}
}); 

// modal is not opened 
// bug: wrong user name in explore cards   
