import { Module } from '@nestjs/common';
import { SlashCommandsService } from './slash-commands.service';
import { ComponentsModule } from '../components/components.module';

@Module({
  imports: [ComponentsModule],
  providers: [SlashCommandsService],
})
export class SlashCommandsModule {}
