using FinalProject.Core.Models;

namespace FinalProject.Core.Services
{
    public class OrganizationService(DbContextProject context)
    {
        public void AddNewOrganization(OrganizationModel organizationModel)
        {
            context.Organization.Add(organizationModel);
            context.SaveChanges();
        }
    }
}
