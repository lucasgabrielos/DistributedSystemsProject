using System.Text.Json;
using FinalProject.Core.Dto;
using FinalProject.Core.Models;
using FinalProject.Core.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Api.Controllers
{
    [ApiController]

    public class UserController(UserService userService) : ControllerBase
    {
        private readonly UserService userService = userService;

        [HttpGet]
        [Route("GetUserById")]
        public IActionResult GetUserById(string id)
        {
            try
            {
                var user = userService.GetUser(id);
                if (user is null)
                    return NotFound();

                return Ok(user);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        
        public IActionResult CadastraUsuario()
        {
            var jsonUser = HttpContext.Request.Form["OrganizationObject"];
            if(string.IsNullOrEmpty(jsonUser)){
                return BadRequest();
            }

            var userDto = JsonSerializer.Deserialize<UserDto>(HttpContext.Request.Form["UserObject"]);
            var userModel = new UserModel()
            {
                Email = userDto.Email,
                Endereco = userDto.Endereco,
                Name = userDto.Name,
                Senha = userDto.Senha                
            };

            var geoLocation = GeocodingService.GetCoordinatesAsync(userModel.Endereco);

            userModel.Latitude = geoLocation.Result.Latitude;
            userModel.Longitude = geoLocation.Result.Longitude;

            userService.AddUser(userModel);
            return Created();
        }
    }
}
