using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
   
    [HttpGet("geocode")]
    public async Task<IActionResult> GetCoordinates(string address)
    {
        var result = await GeocodingService.GetCoordinatesAsync(address);
        return Ok(result);
    }
}
