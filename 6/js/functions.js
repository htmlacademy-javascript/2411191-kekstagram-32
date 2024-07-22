const startDay = '08:00';
const endDay = '17:30';
const startMeet = '14:30';
const meetTime = '90';

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes; // Возвращаем общее количество минут от начала суток
}

function isMeetingInWorkday() {
  const startMinutes = parseTime(startDay);
  const endMinutes = parseTime(endDay);
  const meetingStartMinutes = parseTime(startMeet);
  const meetingEndMinutes = meetingStartMinutes + meetTime;

  // Проверяем, укладывается ли встреча в рамки рабочего дня
  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
}

isMeetingInWorkday(startDay, endDay, startMeet, meetTime);
