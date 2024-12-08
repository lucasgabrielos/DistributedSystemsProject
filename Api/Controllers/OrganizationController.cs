using FinalProject.Core;
using FinalProject.Core.Dto;
using FinalProject.Core.Models;
using FinalProject.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace FinalProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrganizationController() : ControllerBase
    {
        private readonly OrganizationService organizationService = new(new DbContextProject());


        [HttpGet]
        [Route("ListOrganization")]
        public IActionResult ListOrganization()
        {

            var listOrganizations = organizationService.ListOrganizationModel();
            return Ok(listOrganizations);
        }

        [HttpPost]
        [Route("UpdateOrganization")]
        public IActionResult UpdateOrganization(string organizationId)
        {
            var jsonUser = HttpContext.Request.Form["OrganizationObject"];
            if (string.IsNullOrEmpty(jsonUser))
                return BadRequest();

            var organizationDto = JsonSerializer.Deserialize<OrganizationDto>(jsonUser);
            var organization = organizationService.FindOrganization(organizationId);

            if (organization == null)
                return NotFound("Nenhuma organização encontrada");

            organizationService.EditOrganization(organization);
            return Ok(organization);
        }

        [HttpPost]
        [Route("CreateOrganization")]
        public IActionResult CreateOrganization()
        {
            try
            {
                var jsonUser = HttpContext.Request.Form["OrganizationObject"];
                if (string.IsNullOrEmpty(jsonUser))
                    return BadRequest();

                var organizationDto = JsonSerializer.Deserialize<OrganizationDto>(jsonUser);
                var organizationModel = new OrganizationModel()
                {
                    Email = organizationDto.Email,
                    Endereco = organizationDto.Endereco,
                    NomeDaOrganizacao = organizationDto.NomeDaOrganizacao,
                    NomeFantasia = organizationDto.NomeFantasia,
                    Senha = organizationDto.Senha,
                    Descricao = organizationDto.Descricao,
                };

                var geoLocation = GeocodingService.GetCoordinatesAsync(organizationModel.Endereco);

                organizationModel.Latitude = geoLocation.Result.Latitude;
                organizationModel.Longitude = geoLocation.Result.Longitude;

                organizationService.AddNewOrganization(organizationModel);
                return Created();
            }
            catch (Exception ex)
            {
                var teste = ex;
                throw;
            }
        }
    }
}
