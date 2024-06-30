// Asignacion explicita

let nombre: string = "Carlos";

// Asignacion implicita

let edad = 30; // Infiere que es un number

let apellido: any;
apellido = "cruz";

let valorDesconocido: unknown = "Hola";

const arr = [
  {
    monto: 20,
  },
  {
    monto: "10",
  },
];

if (typeof valorDesconocido === "string") {
}

type ID = number | string;

let userId: ID = "Abc21";
