/* 
  Simula um delay de tempo para testes, pode ser assíncrono.
*/

export const delay = (milliseconds: number, fn: () => void) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};
