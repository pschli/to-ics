import { generateICS, ICSInputData } from "./to-ics.js";

let icsInput: ICSInputData = {
  date: "3-10-2025",
  startTime: "12:00",
  duration: "0:30",
  summary: "Termin mit (Variable)",
  description: "",
};

let output: string = generateICS(icsInput);
console.log(output);
