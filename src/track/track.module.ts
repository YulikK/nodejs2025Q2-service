import { forwardRef, Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { FavoritesModule } from '../favorites/favorites.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './entities/track.entity';
import { ArtistModule } from '../artist/artist.module';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Track]),
    forwardRef(() => FavoritesModule),
    ArtistModule,
    AlbumModule,
  ],
  controllers: [TrackController],
  providers: [TrackService],
  exports: [TrackService],
})
export class TrackModule {}
