using System.Collections.Generic;


namespace Sample.Services
{
    public interface IStoreService
    {
        IEnumerable<Models.Product> GetAllProducts();

        void AddProduct(Models.Product product);

        void ModifyProduct(Models.Product product);

        void DeleteProduct(int id);
    }
}
