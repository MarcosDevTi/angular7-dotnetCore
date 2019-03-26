using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class Photo
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Url { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        public bool IsMain { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }
    }
}