import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editTodo(todo) {
			todo.set('isEditing', true);
		},
		removeTodo(todo) {
			todo.destroyRecord();
		}
	},
	atComplete: Ember.computed('model.@each.isCompleted', function(){
		this.get('model').set('createdAt', moment());
		this.get('model').save();
		return moment().format('hh:mm:ss');
	}),
	isEditing: false,
	isCompleted: Ember.computed('model.isCompleted', function(key, value){
		var model = this.get('model');

		if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
  } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
  }
})
});
