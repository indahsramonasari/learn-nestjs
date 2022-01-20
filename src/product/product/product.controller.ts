import { Controller, Get } from '@nestjs/common';
import { Product } from '../product.entity';
import { ProductService } from './product.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    index(): Promise<Product[]> {
      return this.productService.findAll();
    }

    @Post('create')
    async create(@Body() productData: Product): Promise<any> {
      return this.productService.create(productData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() productData: Product): Promise<any> {
      productData.id = Number(id);
        console.log('Update product with id #' + productData.id)
        return this.productService.update(productData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      console.log('Delete product with id #' + id)
      return this.productService.delete(id);
    }
    
}
