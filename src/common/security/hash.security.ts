import * as bcrypt from 'bcrypt';

export const handleHashPassword = async (password: string) => {
  const saltOrRounds: number = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};
