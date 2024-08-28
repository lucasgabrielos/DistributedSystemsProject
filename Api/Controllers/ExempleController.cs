using FinalProject.Core.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Api.Controllers
{
    [ApiController]
    public class ExempleController(UserService userService) : ControllerBase
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

        //Depois eu adiciono o resto 
    }
}
