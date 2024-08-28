namespace FinalProject.Core.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime DtCreated {get;set;}
        public DateTime DtUpdated { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; } 

    }
}
