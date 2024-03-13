import { Module } from '@nestjs/common';
import { ContextMenusService } from './context-menus.service';

@Module({
  controllers: [],
  providers: [ContextMenusService],
})
export class ContextMenusModule {}
