import { Injectable } from '@nestjs/common';
import { ActionRowBuilder } from 'discord.js';
import { Buttons } from './components.buttons';
import { Button, Context} from 'necord';

@Injectable()
export class ComponentsService {

  constructor(
    private readonly buttons: Buttons,
  ) {
  }

  @Button('click/:value')
  public async onButton(@Context() [interaction]){

    const primary = this.buttons.primary;
    const secondary = this.buttons.secondary;
    const success = this.buttons.success;
    const danger = this.buttons.danger;
    const link = this.buttons.link;

    const rowbuttons = new ActionRowBuilder()
      .addComponents(primary, secondary, success, danger, link);


    const response = await interaction.reply({
      content: 'Selecciona un botón',
      components: [rowbuttons],

    });

    //Para que solo el mismo usuario que ingresa el comando, sea el que puede responder

    // const collectorFilter = i => i.user.id === interaction.user.id;
    const collectorFilter = ({ user }) => user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000});

      const buttonMessages = {
        'primary': 'Presionaste primary',
        'secondary': 'Presionaste secondary',
        'success': 'Presionaste success',
        'danger': 'Presionaste danger',
        'link': 'Presionaste link'
      };

      const message = buttonMessages[confirmation.customId];
      if (message) {
        await confirmation.update({ content: message });

      }

    }catch (e){
      await response.edit({content:'Tiempo de respuesta agotado. No se ha seleccionado una opción.',components: []})
    }

  }
  //
  //
  // @SlashCommand({
  //   name: 'boton',
  //   description: 'boton',
  // })
  // @Button('click/:value')
  // public async onButton(@Context() [interaction]) {
  //
  //   const primary = this.buttons.createButton('primary',ButtonStyle.Primary,'primary');
  //   const secondary = this.buttons.createButton('secondary',ButtonStyle.Secondary,'secondary');
  //   const success = this.buttons.createButton('success',ButtonStyle.Success,'success');
  //   const danger = this.buttons.createButton('danger',ButtonStyle.Danger,'danger');
  //   const link = this.buttons.createButton('link',ButtonStyle.Link,'link','http://localhost');
  //
  //
  //   const rowButtons = new ActionRowBuilder()
  //     .addComponents(primary, secondary, success, danger, link);
  //
  //   const response = await interaction.reply({
  //     content: 'Selecciona un botón',
  //     components: [rowButtons],
  //   });
  //
  //   const collectorFilter = ({ user }) => user.id === interaction.user.id;
  //
  //   try {
  //     const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
  //     const customId = confirmation.customId;
  //
  //     const buttonMessages = {
  //       [primary[customId]]: 'Presionaste primary',
  //       [secondary[customId]]: 'Presionaste secondary',
  //       [success[customId]]: 'Presionaste success',
  //       [danger[customId]]: 'Presionaste danger',
  //       [link[customId]]: 'Presionaste link'
  //     };
  //
  //     const message = buttonMessages[customId];
  //     if (message) {
  //       await confirmation.update({ content: message });
  //     } else {
  //       throw new Error('CustomId no válido');
  //     }
  //   } catch (error) {
  //     await response.edit({ content: 'Tiempo de respuesta agotado. No se ha seleccionado una opción.', components: [] });
  //   }
  // }


}
