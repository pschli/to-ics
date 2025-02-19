type attendeeData = {
  name: string;
  email: string;
};

interface icsInputData {
  date: string;
  startTime: string;
  duration: string;
  summary: string;
  description?: string;
  endTime?: string;
  attendees?: attendeeData[];
}

export function generateICS(data: icsInputData) {
  if (!data.endTime) data.endTime = getEndTime(data.startTime, data.duration);
  let file =
    "BEGIN:VCALENDAR\n" +
    "CALSCALE:GREGORIAN\n" +
    "METHOD:PUBLISH\n" +
    "PRODID:-//Cyla//EN\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    "UID:" +
    getUID() +
    "\n" +
    "DTSTART;VALUE=DATE-TIME:" +
    formatDate(data.date, data.startTime) +
    "\n" +
    "DTEND;VALUE=DATE-TIME:" +
    formatDate(data.date, data.endTime) +
    "\n" +
    "SUMMARY:" +
    data.summary +
    "\n";
  if (data.description) file += "DESCRIPTION:" + data.description + "\n";
  if (data.attendees && data.attendees.length > 0) {
    let attendeeString: string = buildAppendeesEntries(data.attendees);
    file += attendeeString;
  }
  file += "END:VEVENT\n" + "END:VCALENDAR";
  console.log(file);
  return file;
}

function formatDate(date: string, time: string) {
  const formattedDate = convertDate(date) + convertTime(time);
  return formattedDate;
}

function convertDate(date: string): string {
  let pieces = date.split("-");
  let [month, day, year] = pieces;
  month = month.length < 2 ? "0" + month : month;
  console.log(month);
  day = day.length < 2 ? "0" + day : day;
  return year + month + day;
}

function convertTime(time: string): string {
  let pieces = time.split(":");
  let [hours, minutes] = pieces;
  hours = hours.length < 2 ? "0" + hours : hours;
  return hours + minutes + "00";
}

function getEndTime(time: string, duration: string): string {
  let timeNumber = getTimeAsNumber(time);
  let durationNumber = getTimeAsNumber(duration);
  let minutes = (timeNumber + durationNumber) % 60;
  let hours = (timeNumber + durationNumber - minutes) / 60;
  return hours.toString() + ":" + minutes.toString();
}

function getTimeAsNumber(timeValue: string): number {
  let pieces = timeValue.split(":");
  let [hours, minutes] = pieces;
  return parseInt(hours) * 60 + parseInt(minutes);
}

function buildAppendeesEntries(attendees: attendeeData[]) {
  let attendeeString: string = "";
  return attendeeString;
}

function getUID() {
  const UID = "1234";
  return UID;
}
