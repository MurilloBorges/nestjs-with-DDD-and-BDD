import { Module } from '@nestjs/common';
import { WishlistService } from './services/wishlist.service';
import { WishlistController } from './controllers/wishlist.controller';

@Module({
    imports: [],
    controllers: [WishlistController],
    providers: [WishlistService],
})
export class WishlistModule {}
