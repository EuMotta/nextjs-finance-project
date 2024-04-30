/* 
  Pode ser adicionado variaveis de ambiente de forma segura,
  para isso é necessário criar um arquivo .env.local
  e adicionar as variaveis de ambiente.
*/
import zod from 'zod';

const envSchema = zod.object({
  FULL_URL: zod.string().min(1),
});

export const env = envSchema.parse(process.env);
