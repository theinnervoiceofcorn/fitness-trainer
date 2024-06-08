export interface Program {
  id: number;
  className: string;
  backgroundImage: string;
  cardName: string;
  cardDescription: string;
  programPrice: string;
}

const PROGRAMS_TYPE_A: Program[] = [
  {
    id: 1,
    className: "A",
    backgroundImage: "./src/shared/assets/programCardBg1.jpg",
    cardName: "программа A1",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 2,
    className: "A",
    backgroundImage: "./src/shared/assets/programCardBg1.jpg",
    cardName: "программа A2",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 3,
    className: "A",
    backgroundImage: "./src/shared/assets/programCardBg1.jpg",
    cardName: "программа A3",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 4,
    className: "A",
    backgroundImage: "./src/shared/assets/programCardBg1.jpg",
    cardName: "программа A4",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
];

const PROGRAMS_TYPE_B: Program[] = [
  {
    id: 5,
    className: "B",
    backgroundImage: "./src/shared/assets/programCardBg2.jpg",
    cardName: "программа B1",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 6,
    className: "B",
    backgroundImage: "./src/shared/assets/programCardBg2.jpg",
    cardName: "программа B2",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 7,
    className: "B",
    backgroundImage: "./src/shared/assets/programCardBg2.jpg",
    cardName: "программа B3",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 8,
    className: "B",
    backgroundImage: "./src/shared/assets/programCardBg2.jpg",
    cardName: "программа B4",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
];

const PROGRAMS_TYPE_C: Program[] = [
  {
    id: 9,
    className: "C",
    backgroundImage: "./src/shared/assets/programCardBg3.jpg",
    cardName: "программа C1",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 10,
    className: "C",
    backgroundImage: "./src/shared/assets/programCardBg3.jpg",
    cardName: "программа C2",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
  {
    id: 11,
    className: "C",
    backgroundImage: "./src/shared/assets/programCardBg3.jpg",
    cardName: "программа C3",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, explicabo. Minima aspernatur sequi incidunt molestias!",
    programPrice: "xxx",
  },
];

export { PROGRAMS_TYPE_A, PROGRAMS_TYPE_B, PROGRAMS_TYPE_C };
