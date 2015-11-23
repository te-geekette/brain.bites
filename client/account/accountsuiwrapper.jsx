AccountsUIWrapper = React.createClass({

	componentDidMount(){
		this.view = Blaze.render(Template.loginButtons,ReactDOM.findDOMNode(this.refs.login));
	},

	componentWillUnmount(){
        Blaze.remove(this.view);
    },
    render(){
    	return ( <a className='blue-grey lighten-4 dropdown-button btn' href='#' data-activates='dropdown1' ref='login' align="center" />	);
    }
});