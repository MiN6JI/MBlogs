// ✅ validations.js
import { z } from 'zod'

export const validation = z.object({
  title: z.string().min(30, 'Title must be at least 30 characters long'),
  body: z.string().min(1, 'Blog body cannot be empty'),
  image: z
    .instanceof(File)
    .refine(file => file.size < 5_000_000, {
      message: 'Image must be under 5MB',
    })
    .nullable()
})
