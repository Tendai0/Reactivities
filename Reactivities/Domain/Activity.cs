using System;

namespace Domain;

public class Activity
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; } 
    public required string Description { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public required string Category { get; set; } = string.Empty;
    public required string City { get; set; } = string.Empty;
    public required string Venue { get; set; } = string.Empty;
    public double Latitude { get; set; } 
    public double Longitude { get; set; } 
    public bool IsCancelled { get; set; }
}
