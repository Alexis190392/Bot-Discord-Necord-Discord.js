import { Injectable } from '@nestjs/common';
import { Context,
  TargetUser,
  UserCommand,
  UserCommandContext
} from 'necord';
import { EmbedBuilder, User } from 'discord.js';


@Injectable()
export class ContextMenusService {
  @UserCommand({ name: 'Obtener avatar' })
  public async getUserAvatar(
    @Context() [interaction]: UserCommandContext,
    @TargetUser() user: User
  ) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder().setTitle(`Avatar de ${user.username}`).setImage(user.displayAvatarURL({size:4096}))
      ]
    });
  }
}
