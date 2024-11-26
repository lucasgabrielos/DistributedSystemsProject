using FinalProject.Core.Dto;
using FinalProject.Core.Models;
using FinalProject.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace FinalProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrganizationController(OrganizationService organizationService) : ControllerBase
    {
        private readonly OrganizationService organizationService = organizationService;

        [HttpPost]
        [Route("CreateOrganization")]
        public IActionResult CreateOrganization()
        {
            var jsonUser = HttpContext.Request.Form["OrganizationObject"];
            if(string.IsNullOrEmpty(jsonUser)){
                return BadRequest();
            }

            var organizationDto = JsonSerializer.Deserialize<OrganizationDto>(HttpContext.Request.Form["OrganizationObject"]);
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
    }
}
