// Justin => [J,u,s,t,i,n] => string => string[]
// [J,u,s,t,i,n] => Justin => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Justin');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Justin =>', rtaArray);

const rtaStr = parseStr(['J','u','s','t','i','n']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['J','u','s','t','i','n'] =>", rtaStr);
