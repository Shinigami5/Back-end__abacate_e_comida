using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoAPI.Models
{
    public class Receita
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        [BsonElement("Receita")]
        public string TituloReceita { get; set; }

        public string Ingrediente { get; set; }

        public string howFazer { get; set; }

        public string autor { get; set; }
    }
}