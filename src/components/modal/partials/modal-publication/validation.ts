import { z } from 'zod';

export const createPublicationSchema = z.object({
  title: z
    .string()
    .min(1, 'Insire um título'),
  description: z
    .string()
    .min(1, 'Insira uma descrição'),
});

export type CreatePublicationSchema = z.infer<typeof createPublicationSchema>;
