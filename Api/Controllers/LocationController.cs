using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
    //private readonly GeocodingService _geocodingService;

    //public LocationController(GeocodingService geocodingService)
    //{
    //    _geocodingService = geocodingService;
    //}

    [HttpGet("geocode")]
    public async Task<IActionResult> GetCoordinates(string address)
    {
        var result = await GeocodingService.GetCoordinatesAsync(address);
        return Ok(result);
    }
}
