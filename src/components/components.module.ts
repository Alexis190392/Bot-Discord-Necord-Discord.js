import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { Buttons } from './components.buttons';
import { StringSelectMenu } from './components.string-select';

@Module({
  controllers: [],
  providers: [
    ComponentsService,
    Buttons,
    StringSelectMenu
  ],
  exports:[ComponentsService]
})
export class ComponentsModule {}
