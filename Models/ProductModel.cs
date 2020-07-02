using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sample.Models
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public int quantityAvailable { get; set; }
        public DateTime recordEntry { get; set; }
        public DateTime? recordUpdate { get; set; }
    }
}