import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import HealthModule from './healthcheck.module';

@Module({
    imports: [HealthModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
