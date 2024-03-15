import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from 'discord.js';


export class StringSelectMenu{
  default = new StringSelectMenuBuilder()
    .setCustomId('pokemons')
    .setPlaceholder('Pokemones!')
    .addOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel('Bulbasaur')
        .setDescription('The dual-type Grass/Poison Seed Pokémon.')
        .setValue('bulbasaur')
        .setEmoji('💚'),
      new StringSelectMenuOptionBuilder()
        .setLabel('Charmander')
        .setDescription('The Fire-type Lizard Pokémon.')
        .setValue('charmander')
        .setEmoji('🧡'),
      new StringSelectMenuOptionBuilder()
        .setLabel('Squirtle')
        .setDescription('The Water-type Tiny Turtle Pokémon.')
        .setValue('squirtle')
        .setEmoji('💙'),
    );
}