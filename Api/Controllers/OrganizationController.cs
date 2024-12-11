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

        [HttpGet]
        [Route("GetOrganizationByEmailAndPassword")]
        public IActionResult GetOrganizationByEmailAndPassword(string email, string password)
        {
            var organization = organizationService.GetOrganizationByEmailAndPassword(email, password);
            if (organization == null)
                return NoContent();

            return Ok(organization);
        }

        [HttpPost]
        [Route("UpdateOrganization")]
        public IActionResult UpdateOrganization()
        {
            var jsonUser = HttpContext.Request.Form["OrganizationObject"];
            if (string.IsNullOrEmpty(jsonUser))
                return BadRequest();

            var organizationDto = JsonSerializer.Deserialize<OrganizationDto>(jsonUser);
            var organization = organizationService.FindOrganization(organizationDto.Id);

            if (organization == null)
                return NotFound("Nenhuma organização encontrada");

            organization.Senha = organizationDto.Senha;
            organization.Email = organizationDto.Email;
            organization.Endereco = organizationDto.Endereco;
            organization.Descricao = organizationDto.Descricao;
            organization.CEP = string.IsNullOrEmpty(organizationDto.CEP) ? string.Empty : organization.CEP;
            organization.NomeDaOrganizacao = organizationDto.NomeDaOrganizacao;
            organization.NomeFantasia = organizationDto.NomeFantasia;

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
                    CEP = organizationDto.CEP,
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
