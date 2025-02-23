import { generateICS, ICSInputData } from "./to-ics.js";

let icsInput: ICSInputData = {
  prodId: "NAME",
  date: "3-10-2025",
  startTime: "12:00",
  duration: "0:30",
  summary: "Appointment",
  description: "Interview",
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
