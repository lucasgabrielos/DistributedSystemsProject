namespace FinalProject.Core.Models
{
    public class Coordenates
    {
        public Coordenates(string latitude, string longitude)
        {
            Latitude = latitude;
            Longitude = longitude;
        }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
