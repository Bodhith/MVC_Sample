using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Web.Http.Cors;

namespace Sample.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StoreController : ApiController
    {
        readonly Services.IStoreService storeService;

        public StoreController(Services.IStoreService storeService)
        {
            this.storeService = storeService;
        }

        [HttpGet]
        [Route("api/getAllProducts")]
        public IEnumerable<Models.Product> GetAllProducts()
        {
            return this.storeService.GetAllProducts();
        }

        [HttpPost]
        [Route("api/addProduct/")]
        public void AddProduct(Models.Product product)
        {
            this.storeService.AddProduct(product);
        }

        [HttpPatch]
        [Route("api/modifyProduct/")]
        public void ModifyProduct(Models.Product product)
        {
            this.storeService.ModifyProduct(product);
        }

        [HttpDelete]
        [Route("api/deleteProduct/{id}")]
        public void Delete(int id)
        {
            this.storeService.DeleteProduct(id);
        }
    }
}
