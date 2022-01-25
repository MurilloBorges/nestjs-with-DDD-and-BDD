import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedflowModule } from './sharedflow/sharedflow.module';

@Module({
  imports: [ClientModule, ProductModule, WishlistModule, AuthenticationModule, SharedflowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
