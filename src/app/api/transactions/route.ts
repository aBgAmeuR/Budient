import { getServerSession } from 'next-auth';
import * as z from 'zod';
import { options } from '../auth/[...nextauth]/options';
import prisma from '@/app/lib/prisma';

const transationCreateSchema = z.object({
  name: z.string(),
  date: z.string().transform((str) => new Date(str)),
  amount: z.string().regex(/^-?\d+(\.\d{1,2})?$/),
  category: z.string(),
  description: z.string().max(160).optional(),
});

export async function POST(req: Request) {
  try {    
    const session = await getServerSession(options);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { user } = session;

    const json = await req.json();
    const body = transationCreateSchema.parse(json);

    const transaction = await prisma.transaction.create({
      data: {
        name: body.name,
        date: new Date(body.date),
        amount: parseFloat(body.amount),
        category: body.category,
        description: body.description || '',
        author: {
          connect: { id: user.id },
        },
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(transaction));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
