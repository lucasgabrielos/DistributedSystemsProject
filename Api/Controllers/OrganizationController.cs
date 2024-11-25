using FinalProject.Core.Dto;
using FinalProject.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace FinalProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrganizationController : ControllerBase
    {
        [HttpPost]
        [Route("CreateOrganization")]
        public IActionResult CreateOrganization()
        {
            var teste = HttpContext.Request.Form["OrganizationObject"];
            var teste2 = JsonSerializer.Deserialize<OrganizationDto>(teste);
            return Ok();
        }
    }
}
