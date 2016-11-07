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
      return model.get('isCompleted'); // property being used as a getter
    } else {
      model.set('isCompleted', value); // property being used as a setter
      model.save();
      return value;
    }
})
});
