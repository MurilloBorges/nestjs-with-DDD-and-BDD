import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [ClientModule, ProductModule, WishlistModule, AuthenticationModule, SharedModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
