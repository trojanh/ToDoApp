import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement(){
		this.$().focus();
	},

	actions: {
		acceptChanges(content) {
			var model = this.get('todo');
			model.set('isEditing', false);
			if (Ember.isEmpty(content)) {
				return false;
			} else {
				model.save();
			}
		}
	}
});