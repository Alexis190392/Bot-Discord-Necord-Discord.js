import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { Buttons } from './components.buttons';

@Module({
  controllers: [],
  providers: [ComponentsService,Buttons],
  exports:[ComponentsService]
})
export class ComponentsModule {}
