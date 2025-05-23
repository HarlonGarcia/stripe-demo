import { z } from 'zod';

export const createSuggestionSchema = z.object({
  comment: z
    .string()
    .min(1, 'Insire um comentário'),
  suggestedPrice: z
    .string()
    .min(1, 'Insira um valor')
    .refine((value) => Number(value) >= 0, {
      message: 'Insira um valor positivo',
    }),
});

export type CreateSuggestionSchema = z.infer<typeof createSuggestionSchema>;
