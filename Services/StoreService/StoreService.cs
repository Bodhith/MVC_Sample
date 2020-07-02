using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Sample.Models;

namespace Sample.Services
{
    public class StoreService : IStoreService
    {
        PetaPoco.Database db;

        public StoreService()
        {
            this.db = new PetaPoco.Database("SampleSQLServerConnectionString");
        }

        public void AddProduct(Product product)
        {
            Product checkExists;
            string query;

            query = $"select id from products where name='{product.name}'";
  
            checkExists = db.SingleOrDefault<Product>(query);

            if( checkExists == null )
            {
                product.recordEntry = DateTime.Now;
                product.recordUpdate = null;

                db.Insert("products", product);
            }

        }

        public void DeleteProduct(int id)
        {
            db.Delete("products", "id", null, id);
        }

        public IEnumerable<Product> GetAllProducts()
        {
            string query;

            query = "select id, name, price, quantityAvailable, recordEntry, recordUpdate from products;";

            return db.Query<Product>(query);
        }

        public void ModifyProduct(Product product)
        {
            string query;

            query = $"select id from products where name='{product.name}';";

            var checkExists = db.SingleOrDefault<Product>(query);

            if( checkExists != null )
            {
                string[] columns = { "price", "quantityAvailable", "recordUpdate" };

                product.recordUpdate = DateTime.Now;

                db.Update("products", "id", product, product.id, columns);
            }

        }
    }
}