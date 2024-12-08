using FinalProject.Core.Models;
using MySqlConnector;

namespace FinalProject.Core.Services
{
    public class OrganizationService(DbContextProject context)
    {
        public void AddNewOrganization(OrganizationModel organizationModel)
        {
            context.Organization.Add(organizationModel);
            context.SaveChanges();
        }

        public void EditOrganization(OrganizationModel organizationModel)
        {
            context.Organization.Update(organizationModel);
            context.SaveChanges();
        }
        public OrganizationModel FindOrganization(string organizationId)
        {
            return context.Organization.Find(organizationId);
        }

        public OrganizationModel GetOrganizationByName(string organizationName)
        {
            try
            {
                var query = $"select * from organization where NomeDaOrganizacao = '{organizationName}'";

                // Criando conexão
                using (MySqlConnection connection = new MySqlConnection(context.ConnectionString))
                {
                    // Abrindo conexão
                    connection.Open();

                    // Criando comando SQL
                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        // Executando comando e lendo resultados
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            // Verificando se há linhas retornadas
                            if (reader.HasRows)
                            {
                                // Lendo os dados linha por linha

                                var organization = new OrganizationModel
                                {
                                    Id = Convert.ToInt32(reader["Id"]),
                                    NomeDaOrganizacao = reader["NomeDaOrganizacao"].ToString(),
                                    NomeFantasia = reader["NomeFantasia"].ToString(),
                                    Endereco = reader["Endereco"].ToString(),
                                    CEP = reader["CEP"].ToString(),
                                    Longitude = reader["Longitude"].ToString(),
                                    Latitude = reader["Latitude"].ToString(),
                                    Senha = reader["Senha"].ToString(),
                                    Email = reader["Email"].ToString(),
                                    Descricao = reader["Descricao"].ToString(),
                                    DtCriacao = Convert.ToDateTime(reader["DtCriacao"])
                                };

                                return organization;
                            }
                            else
                            {
                                // Caso não tenha resultados, retornamos uma lista vazia
                                return null;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<OrganizationModel> ListOrganizationModel()
        {
            var listOrganization = new List<OrganizationModel>();
            try
            {
                var query = "select * from organization";

                // Criando conexão
                using (MySqlConnection connection = new MySqlConnection(context.ConnectionString))
                {
                    // Abrindo conexão
                    connection.Open();

                    // Criando comando SQL
                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        // Executando comando e lendo resultados
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            // Verificando se há linhas retornadas
                            if (reader.HasRows)
                            {
                                // Lendo os dados linha por linha
                                while (reader.Read())  // 'Read' é chamado para mover o cursor para a primeira linha
                                {
                                    var organization = new OrganizationModel
                                    {
                                        Id = Convert.ToInt32(reader["Id"]),
                                        NomeDaOrganizacao = reader["NomeDaOrganizacao"].ToString(),
                                        NomeFantasia = reader["NomeFantasia"].ToString(),
                                        Endereco = reader["Endereco"].ToString(),
                                        CEP = reader["CEP"].ToString(),
                                        Longitude = reader["Longitude"].ToString(),
                                        Latitude = reader["Latitude"].ToString(),
                                        Senha = reader["Senha"].ToString(),
                                        Email = reader["Email"].ToString(),
                                        Descricao = reader["Descricao"].ToString(),
                                        DtCriacao = Convert.ToDateTime(reader["DtCriacao"])
                                    };

                                    listOrganization.Add(organization);
                                }
                            }
                            else
                            {
                                // Caso não tenha resultados, retornamos uma lista vazia
                                return listOrganization;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Em caso de erro, retorna uma lista vazia
                Console.WriteLine("Erro: " + ex.Message);  // Log de erro (opcional)
                return listOrganization;
            }

            return listOrganization;
        }

    }
}
