namespace TodoAPI.Models
{
    public class ReceitaListDatabaseSettings : IReceitaListDatabaseSettings
    {
        public string ReceitaCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IReceitaListDatabaseSettings
    {
        string ReceitaCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}