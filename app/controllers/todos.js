import Ember from 'ember';

export default Ember.Controller.extend({
  
	actions: {
		createTodo() {
			var title = this.get('newTitle');
			if(!title){ return false; }
			if(!title.trim()){ return; }

			var todo = this.store.createRecord('todo', {
				title:title,
				isCompleted:false,
				//createdAt: new Date(),
			});

      		//clear out text field
      		this.set('newTitle','');
      		todo.save();
      	},

      	// editTodo(todo) {
      	// 	todo.set('isEditing', true);
      	// },
      	// removeTodo(todo) {
      	// 	todo.destroyRecord();
      	// },

      	destroyAll(model) {
      		model.invoke('deleteRecord');
      		model.invoke('save');
      	},

      	clearCompleted() {
      		var completed = this.get('model').filterBy('isCompleted', true);
      		completed.invoke('deleteRecord');
      		completed.invoke('save');
      	}
      },



      hasCompleted: Ember.computed('completed', function(){
      	return this.get('completed') > 0;
      }),

      completed: Ember.computed('model.@each.isCompleted', function(){
      	return this.get('model').filterBy('isCompleted', true).get('length');
      }),

      remaining: Ember.computed('model.@each.isCompleted', function(){
      	return this.get('model').filterBy('isCompleted', false).get('length');
      }),

      inflection: Ember.computed('remaining', function(){
      	var remaining = this.get('remaining');
      	return remaining <= 1 ? 'item' : 'items';
      }),

      allAreDone: Ember.computed("model.@each.isCompleted", {
        get() {
            return this.get('model').get('length') && this.get('model').isEvery('isCompleted');
      },

      set(key, value) {
            this.get('model').setEach('isCompleted', value);
            this.get('model').invoke('save');
            return value;
      }
})



});
