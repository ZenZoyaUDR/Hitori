import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getURL: publicProcedure.query(() => {
    const isVercel = !!process.env.VERCEL_URL;

    const local = `http://127.0.0.1:${process.env.PORT ?? 3000}`;
    const vercel = `https://${process.env.VERCEL_URL}`;

    return isVercel ? vercel : local;
  }),
});
