using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web;

public static class GeocodingService
{
    private static readonly HttpClient client = new HttpClient();

    public static async Task<object?> GetCoordinatesAsync(string address)
    {
        string apiKey = "aca135324cab4112bc56239465c87b77";
        string url = $"https://api.opencagedata.com/geocode/v1/json?q={HttpUtility.UrlEncode(address)}&key={apiKey}";
        HttpResponseMessage response = await client.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            string jsonResponse = await response.Content.ReadAsStringAsync();

            using var document = JsonDocument.Parse(jsonResponse);
            var root = document.RootElement;

            if (root.TryGetProperty("results", out var results) && results.GetArrayLength() > 0)
            {
                var firstResult = results[0];
                if (firstResult.TryGetProperty("geometry", out var geometry))
                {
                    double? lat = geometry.GetProperty("lat").GetDouble();
                    double? lng = geometry.GetProperty("lng").GetDouble();
                    return new {latitude = lat,  longitude = lng };
                }
            }
        }

        return null;
    }
}
