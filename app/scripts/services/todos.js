angular.module('ExternalDataServices')

// add a factory
.factory('TodosService', ['ParseQueryAngular', function(ParseQueryAngular) {

  var Todo = Parse.Object.extendAngular({
    className:"Todo",
    setTitle: function(title) {
      this.set('title',title);
      return this;
    },
    setCompleted: function(completed) {
      this.set('completed', completed);
      return this;
    },
    getTitle: function() {
      return this.get('title');
    },
    getCompleted: function() {
      return this.get('completed');
    },
    destroyParse:function(){
      return ParseQueryAngular(this,{functionToCall:"destroy"});
    }
  });

  var Todos = Parse.Collection.extendAngular({
    model: Todo,
    comparator: function(model) {
      return -model.createdAt.getTime();
    },
    loadRecentTodos: function(){
      this.query = (new Parse.Query(Todo));
      this.query.limit(10);
      return this.load();
    },
    loadTodosWithTitle: function(title) {
      this.query = (new Parse.Query(Todo));
      this.query.equalTo('title', title);
      // use the enhanced load() function to fetch the collection
      return this.load();
    },
    addTodo: function(title, completed) {
      // save request_id to Parse
      var _this = this;

      var todo = new Todo();
      todo.setTitle(title);
      todo.setCompleted(completed);

      // use the extended Parse SDK to perform a save and return the promised object back into the Angular world
      return todo.saveParse().then(function(data){
        _this.add(data);
      })
    },
    removeTodo:function(todo) {
      if (!this.get(todo)) return false;
      var _this = this;
      return todo.destroyParse().then(function(){
        _this.remove(todo);
      });
    }
  });

  // Return a simple API : model or collection.
  return {
    model: Todo,
    collection: Todos
  };

}]);