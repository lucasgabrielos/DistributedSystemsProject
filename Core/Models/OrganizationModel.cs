namespace FinalProject.Core.Models
{
    public class OrganizationModel
    {
        public OrganizationModel()
        { 
            this.DtCriacao = DateTime.Now;
        }

        public int Id { get; set; }
        public string NomeDaOrganizacao { get; set; }
        public string NomeFantasia { get; set; }
        public string Endereco { get; set; }
        public string CEP { get; set; }
        public string Longitude  { get; set; }
        public string Latitude  { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
        public string Descricao { get; set; }
        public DateTime DtCriacao {  get; set; } 
    }
}
