import { Module } from '@nestjs/common';
import { SlashCommandsService } from './slash-commands.service';

@Module({
  imports: [],
  providers: [SlashCommandsService],
})
export class SlashCommandsModule {}
