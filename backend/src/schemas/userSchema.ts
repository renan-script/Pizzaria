import { z } from 'zod'

export const createUserSchema = z.object({
    body: z.object({
        name: z
            .string({ message: "O nome deve ser um texto!"})
            .min(3, { message: "O nome deve conter no mínimo 3 letras!"}),
        email: z.email({ message: "Precisa ser um email valido!!!"}),
        password: z
            .string()
            .min(6, { message: "A senha deve ter no mínimo 6 caracteres!!!"}),
    }),
});