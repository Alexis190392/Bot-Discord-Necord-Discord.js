import { ButtonBuilder, ButtonStyle } from 'discord.js';


export class Buttons{

  primary = new ButtonBuilder()
    .setCustomId('primary')
    .setLabel('Primary')
    .setStyle(ButtonStyle.Primary);

  secondary = new ButtonBuilder()
    .setCustomId('secondary')
    .setLabel('Secondary')
    .setStyle(ButtonStyle.Secondary);

  success = new ButtonBuilder()
    .setCustomId('success')
    .setLabel('Success')
    .setStyle(ButtonStyle.Success);

  danger = new ButtonBuilder()
    .setCustomId('danger')
    .setLabel('Danger')
    .setStyle(ButtonStyle.Danger);

  link  = new ButtonBuilder()
    .setLabel('Link')
    .setURL('http://www.link.com')
    .setStyle(ButtonStyle.Link);

}