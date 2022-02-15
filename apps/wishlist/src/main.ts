import { NestFactory } from '@nestjs/core';
import { WishlistModule } from '../wishlist.module';

async function bootstrap() {
    const app = await NestFactory.create(WishlistModule);
    await app.listen(3000);
}
bootstrap();
