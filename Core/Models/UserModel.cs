namespace FinalProject.Core.Models
{
    public class UserModel
    {
        public UserModel()
        {
            DtCreated = DateTime.Now;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Endereco {get;set;}
         public string Longitude { get; set; }
        public string Latitude { get; set; } 
        public DateTime DtCreated {get;set;}
        public DateTime DtUpdated { get; set; }

    }
}
