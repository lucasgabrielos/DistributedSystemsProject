namespace FinalProject.Core.Models
{
    public class OrganizationModel
    {
        public int Id { get; set; }
        public string NomeDaOrganizacao { get; set; }
        public string Longitude  { get; set; }
        public string Latitude  { get; set; }

        public string Descricao { get; set; }

        public DateTime DtCriacao {  get; set; } 

    }
}
