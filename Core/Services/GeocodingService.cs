using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

public class GeocodingService
{
    private static readonly HttpClient client = new HttpClient();

    public async Task<string> GetCoordinatesAsync(string address)
    {
        string baseUrl = "https://nominatim.openstreetmap.org/search";
        var builder = new UriBuilder(baseUrl);
        var query = HttpUtility.ParseQueryString(builder.Query);
        query["q"] = address;
        query["format"] = "json";
        builder.Query = query.ToString();
        string url = builder.ToString();

        HttpResponseMessage response = await client.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            string result = await response.Content.ReadAsStringAsync();
            return result; // Aqui você terá as coordenadas em formato JSON
        }

        return null;
    }
}
