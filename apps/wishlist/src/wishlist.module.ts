import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
    imports: [SharedModule],
    controllers: [WishlistController],
    providers: [WishlistService],
})
export class WishlistModule {}
