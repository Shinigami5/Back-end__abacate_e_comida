using TodoAPI.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TodoAPI.Services
{
    public class TodoService
    {
        private readonly IMongoCollection<Todo> _todo;

        public TodoService(ITodoListDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _todo = database.GetCollection<Todo>(settings.TodosCollectionName);
        }

        public List<Todo> Get() =>
            _todo.Find(todo => true).ToList();

        public Todo Get(string id) =>
            _todo.Find<Todo>(todo => todo.Id == id).FirstOrDefault();

        public Todo Create(Todo todo)
        {
            _todo.InsertOne(todo);
            return todo;
        }

        public void Update(Todo todoIn) =>
            _todo.ReplaceOne(todo => todo.Id == todoIn.Id, todoIn);

        public void Remove(Todo todoIn) =>
            _todo.DeleteOne(todo => todo.Id == todoIn.Id);

        public void Remove(string id) => 
            _todo.DeleteOne(todo => todo.Id == id);
    }
}