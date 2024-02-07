/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Week): boolean {
  return day === Week.Friday || day === Week.Sunday;
}
if (isWeekend(Week.Sunday)) {
  console.log("today is weekend");
} else {
  console.log("today is work day");
}
