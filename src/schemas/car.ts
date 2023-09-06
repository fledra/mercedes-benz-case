import { z } from 'zod';

export const carSchema = z.object({
  id: z.union([z.string(), z.number()]),
  carid: z.string().length(17, 'Car ID must be exactly 17 characters long'),
  instock: z.boolean(),
  hp: z
    .number({ coerce: true, invalid_type_error: 'Horsepower must be a positive number' })
    .min(100, 'Horsepower must be at least 100')
    .max(550, 'Horsepower must be less than or equal to 550'),
  price: z
    .number({ coerce: true, invalid_type_error: 'Price must be a positive number' })
    .positive('Price must be a positive number')
    .refine((p) => p),
  color: z.object({
    name: z.string(),
    hex: z.string(),
  }),
});
