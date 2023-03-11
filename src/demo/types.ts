type TName = "Lindit" | "Vigan" | "Donat";
const name2: TName = "Donat";

let age: number | undefined;
let name: string | undefined;
let isAlbanian: boolean | undefined;

let anything: any = null;
anything = {};
anything = "Vigan";

let nothing: undefined | null = undefined;

name = "Lindit";
// same as if (name !== undefined)
if (name) {
  console.log(name);
}

age = 25;
name = "Vigan";
isAlbanian = true;

if (name) {
  console.log(name);
}
