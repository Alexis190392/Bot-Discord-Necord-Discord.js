import { Injectable } from '@nestjs/common';
import {
  Context,
  SlashCommand,
  SlashCommandContext,
  StringSelectContext,
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

  @SlashCommand({
    name: 'string-select',
    description: 'String Select',
  })
  public async onStringSelect(@Context() [interaction]: StringSelectContext) {
    return await this.componentService.onStringSelect([interaction]);
  }
}
