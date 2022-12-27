// Justin => [J,u,s,t,i,n] => string => string[]
// [J,u,s,t,i,n] => Justin => string[] => string

export function parseStr(input: string): string[];  // sobrecarga de una funcion para resolver el tipado de la funcion
export function parseStr(input: string[]): string;  // sobrecarga es para definir que tipo de dato de entrada y salida tendra la funcion con union type
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true
  }
}

const rtaArray = parseStr('Justin');
// rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Justin =>', rtaArray);

const rtaStr = parseStr(['J','u','s','t','i','n']);
// rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['J','u','s','t','i','n'] =>", rtaStr);

const rtaBooll = parseStr(12);
console.log('rtaBooll,', '12', rtaBooll)
