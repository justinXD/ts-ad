let anyVar: any;  // ayVar puede tomar cualquier valor y tipo
let isNew: boolean = anyVar;

let unknowVar: unknown; // unknow es muy similar al any pero unknown es mas restrictivo que any
unknowVar = true; // esto me fuerza a hacer una verificacion de lo que escribo
unknowVar = undefined;
unknowVar = 1;
unknowVar = {};
unknowVar = [];

if (typeof unknowVar === 'string') {  // verificamos si es string
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar;
}
const parse = (str: string): unknown => {
  return JSON.parse(str)
}
