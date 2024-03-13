import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { NecordModule } from "necord";
import { SlashCommandsModule } from './slash-commands/slash-commands.module';
import { IntentsBitField } from 'discord.js';
import { ContextMenusModule } from './context-menus/context-menus.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      intents:[IntentsBitField.Flags.Guilds]
    }),
    SlashCommandsModule,
    ContextMenusModule,
  ],
})
export class AppModule {}
