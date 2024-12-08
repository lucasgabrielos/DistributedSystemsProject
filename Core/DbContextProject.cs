using FinalProject.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FinalProject.Core
{
    public class DbContextProject : DbContext
    {
        public MySqlServerVersion SqlServerVersion = new MySqlServerVersion(new Version(8, 0, 21));
        public string ConnectionString = "Server=localhost;Database=ProjectFinal;User ID=root;Password=root;";

        public DbSet<UserModel> Users { get; set; }
        public DbSet<OrganizationModel> Organization { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(ConnectionString, SqlServerVersion);
        }
    }
}
