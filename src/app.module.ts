import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmConfigService } from './common/providers/ormconfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TouristModule } from './modules/tourist-places/tourist.module';

@Module({
  imports: [
    CommonModule, 
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      useExisting: TypeOrmConfigService,
    }),
    
    TouristModule,
  ],

})
export class AppModule {}
