import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { NecordModule } from "necord";
import { IntentsBitField } from "discord.js";


@Module({
  imports: [
    ConfigModule.forRoot(),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      intents:[IntentsBitField.Flags.Guilds]
    }),
  ],
})
export class AppModule {}
