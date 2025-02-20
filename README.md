# to-ics

to-ics provides a simple way to convert basic appointment data to the .ics format which can be handled by most calendar software. It gives you the event data as a string, not as a file. 

The Input Data must provide the date, starting time and duration or end time, and a summary
```
icsInput: ICSInputData = {
  prodId: "NAME", / string
  date: "3-10-2025", // MM-DD-YYYY
  startTime: "12:00", // HH:MM
  // endTime: "13:00" optional
  duration: "0:30", // HH:MM
  summary: "Appointment" // string
}
```
you may additionally provide
```
icsInput: ICSInputData = {
...
description: "Interview", // string
  attendees: [     // Array of Objects
    {
      name: "Theo Test", 
      email: "theo@test.de",
    },
  ],
  categories: ["Meeting", "Interview"], // Array of strings
}
```
To get your data, call generateICS:
```
let result = generateICS(icsInput);
```

If you need a solution that covers everything the iCalendar format can achieve, please use [ics](https://github.com/adamgibbons/ics). Otherwise feel free to use this code, change it to your needs and improve it as you see fit. Cheers
