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
            context.Entry(organizationModel).CurrentValues.SetValues(organizationModel);
            context.SaveChanges();
        }
        public OrganizationModel FindOrganization(int organizationId)
        {
            return context.Organization.Find(organizationId);
        }

        public OrganizationModel GetOrganizationByEmailAndPassword(string email, string password)
        {
            try
            {
                var query = "SELECT * FROM organization WHERE Email = @Email AND Senha = @Senha";
                using (MySqlConnection connection = new MySqlConnection(context.ConnectionString))
                {
                    connection.Open();

                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        // Definindo parâmetros para evitar SQL Injection
                        command.Parameters.AddWithValue("@Email", email);
                        command.Parameters.AddWithValue("@Senha", password);

                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                return new OrganizationModel
                                {
                                    Id = reader.GetInt32("Id"),
                                    NomeDaOrganizacao = reader["NomeDaOrganizacao"]?.ToString(),
                                    NomeFantasia = reader["NomeFantasia"]?.ToString(),
                                    Endereco = reader["Endereco"]?.ToString(),
                                    CEP = reader["CEP"]?.ToString(),
                                    Longitude = reader["Longitude"]?.ToString(),
                                    Latitude = reader["Latitude"]?.ToString(),
                                    Senha = reader["Senha"]?.ToString(),
                                    Email = reader["Email"]?.ToString(),
                                    Descricao = reader["Descricao"]?.ToString(),
                                    DtCriacao = reader.GetDateTime("DtCriacao")
                                };
                            }
                        }
                    }
                }
            }
            catch (MySqlException sqlEx)
            {
                // Logar erros de banco de dados
                Console.WriteLine($"Erro de banco de dados: {sqlEx.Message}");
            }
            catch (Exception ex)
            {
                // Logar outros erros
                Console.WriteLine($"Erro inesperado: {ex.Message}");
            }

            return null; // Retornar null se ocorrer algum problema
        }


        public List<OrganizationModel> ListOrganizationModel()
        {
            var listOrganization = new List<OrganizationModel>();
            try
            {
                var query = "select * from organization";

                // Criando conex�o
                using (MySqlConnection connection = new MySqlConnection(context.ConnectionString))
                {
                    // Abrindo conex�o
                    connection.Open();

                    // Criando comando SQL
                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        // Executando comando e lendo resultados
                        using (MySqlDataReader reader = command.ExecuteReader())
                        {
                            // Verificando se h� linhas retornadas
                            if (reader.HasRows)
                            {
                                // Lendo os dados linha por linha
                                while (reader.Read())  // 'Read' � chamado para mover o cursor para a primeira linha
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
                                // Caso n�o tenha resultados, retornamos uma lista vazia
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
