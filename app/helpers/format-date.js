	import Ember from 'ember';

	export function formatDate(params/*, hash*/) {
		// var defaultDate=new Date(moment());
		// alert(defaultDate);
		// alert(moment().format('YYYY')+'-'+moment().format('MM')+'-'+moment().format('DD'));
		return moment().format('YYYY-MM-DD');
	}

	export default Ember.Helper.helper(formatDate);
