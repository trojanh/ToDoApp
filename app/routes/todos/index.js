import Ember from 'ember';
window.EmberENV = window.EmberENV || {};
window.EmberENV.ENABLE_DS_FILTER = true;

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('todo');
	}
});