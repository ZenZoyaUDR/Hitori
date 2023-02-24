import { CommandOptions } from "~/pages/api/bot/index";
import { InteractionResponseType, MessageFlags } from "discord-api-types/v10";
import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";

export const execute = async (opt: CommandOptions) => {
  const { res: response, req: request } = opt;

  const ctx = createTRPCContext({ req: request, res: response });
  const trpc = appRouter.createCaller(ctx);

  const message = await trpc.example.hello({
    text: "from tRPC",
  });

  response.json({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `🎉 ${message.greeting}`,
      flags: MessageFlags.Ephemeral,
    },
  });
};
