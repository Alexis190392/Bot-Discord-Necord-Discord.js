import { Injectable } from '@nestjs/common';
import {
  Context,
  SlashCommand,
  SlashCommandContext,
} from 'necord';
import { ComponentsService } from '../components/components.service';

@Injectable()
export class SlashCommandsService {

  constructor(
    private readonly componentService:ComponentsService,
  ) {
  }
  @SlashCommand({
    name: 'ping',
    description: 'Ping-Pong Command',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: 'Pong!' });
  }

  @SlashCommand({
    name: 'botones',
    description: 'botones',
  })
  public async onButton(@Context() [interaction]){
    return await this.componentService.onButton([interaction])
  }
}
