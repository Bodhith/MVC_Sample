using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sample.Models
{
    public class StoreModel
    {
        List<Product> products = new List<Product>();

        public void AddProduct(Product product)
        {
            products.Add(product);
        }
        public Product GetProduct(int id)
        {
            Product product = this.products.SingleOrDefault(_product =>
                  _product.id == id);

            return product;
        }

        public bool DeleteProduct(int id)
        {
            Product product = this.products.SingleOrDefault(_product =>
                  _product.id == id);

            if (product != null)
            {
                this.products.Remove(product);

                return true;
            }

            else
            {
                return false;
            }
        }
    }
}