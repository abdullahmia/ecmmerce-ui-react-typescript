import httpReq from "./http.service";

class ProductService {
    async getAllProducts(): Promise<IProduct[]> {
        const { data } = await httpReq.get('/product');
        return data;
    }

    // get a single product by product id
    async getSingleProduct(id: string): Promise<IProduct>{
        const { data } = await httpReq.get('/product/'+id);
        return data;
    }

}

export default new ProductService();