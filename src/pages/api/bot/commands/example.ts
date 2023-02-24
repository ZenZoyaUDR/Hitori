import { CommandOptions } from "~/pages/api/bot/index";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";

export const execute = async (opt: CommandOptions) => {
  const { res: response } = opt;

  response.json({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `🎉 Your bot works!`,
      flags: MessageFlags.Ephemeral,
    },
  });
};
