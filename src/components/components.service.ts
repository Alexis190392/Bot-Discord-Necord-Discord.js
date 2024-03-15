import { Injectable } from '@nestjs/common';
import { ActionRowBuilder } from 'discord.js';
import { Buttons } from './components.buttons';
import { Button, Context, StringSelect } from 'necord';
import { StringSelectMenu } from './components.string-select';

@Injectable()
export class ComponentsService {

  constructor(
    private readonly buttons: Buttons,
    private readonly stringSelect: StringSelectMenu,
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

  @StringSelect('STRING_SELECT_MENU')
  public async onStringSelect(@Context() [interaction]) {

    const menu = this.stringSelect.default;
    const row = new ActionRowBuilder().addComponents(menu);

    const response = await interaction.reply({
      content: 'Selecciona una opción',
      components: [row],
    });

    const collectorFilter = ({ user }) => user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
      const selectedValues = confirmation.values;

      if (selectedValues.length > 0) {
        // Tomamos el primer valor seleccionado
        const selectedValue = selectedValues[0];

        // Actualizamos la respuesta con el valor seleccionado
        await confirmation.update({ content: `Seleccionaste: ${selectedValue}`,components: []});
      }

    }catch (e){
      await response.edit({content:'Tiempo de respuesta agotado. No se ha seleccionado una opción.',components: []})
    }
  }


}
