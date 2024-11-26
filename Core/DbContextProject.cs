using FinalProject.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FinalProject.Core
{
    public class DbContextProject : DbContext
    {
        public DbSet<UserModel> Users { get; set; }
        public DbSet<OrganizationModel> Organization { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=localhost;Database=ProjectFinal;User ID=root;Password=root;", new MySqlServerVersion(new Version(8, 0, 21)));
        }
    }
}
