# Hitori

Serverless Discord bot template using tRPC and Prisma.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fastridlol%2Fhitori&env=DATABASE_URL,DISCORD_CLIENT_ID,DISCORD_BOT_TOKEN,DISCORD_PUBLIC_KEY&repository-name=hitori-bot)

## How to use

1. Clone the template locally, copy `.env.example` into `.env`, and fill it.
2. Install the dependencies using `npm i`, or which ever package manager you use.
3. Run `npm run register`. This will register the two example commands for your bot (listed in `src/pages/api/bot/register.ts`)
4. Now that the commands are registered, you can deploy to Vercel using the button above!
5. Final step, go to your app on the Discord Developer portal, and set "Interactions Endpoint URL" to `<your vercel URL>/api/bot`
