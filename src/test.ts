import { generateICS, ICSInputData } from "./to-ics.js";

let icsInput: ICSInputData = {
  prodId: "CYLA",
  date: "3-10-2025",
  startTime: "12:00",
  duration: "0:30",
  summary: "Termin mit Theo",
  description: "Besprechung",
  attendees: [
    {
      name: "Theo Test",
      email: "theo@test.de",
    },
  ],
  categories: ["Meeting", "Interview"],
};

let output: string = generateICS(icsInput);
console.log(output);
