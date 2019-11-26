using TodoAPI.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TodoAPI.Services
{
    public class ReceitaService
    {
        private readonly IMongoCollection<Receita> _receita;

        public ReceitaService(IReceitaListDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _receita = database.GetCollection<Receita>(settings.ReceitaCollectionName);
        }

        public List<Receita> Get() =>
            _receita.Find(Receita => true).ToList();

        public Receita Get(string id) =>
            _receita.Find<Receita>(Receita => Receita.id == id).FirstOrDefault();

        public Receita Create(Receita Receita)
        {
            _receita.InsertOne(Receita);
            return Receita;
        }

        public void Update(Receita ReceitaIn) =>
            _receita.ReplaceOne(Receita => Receita.id == ReceitaIn.id, ReceitaIn);

        public void Remove(Receita ReceitaIn) =>
            _receita.DeleteOne(Receita => ReceitaIn.id == ReceitaIn.id);

        public void Remove(string id) => 
            _receita.DeleteOne(Receita => Receita.id == id);
    }
}