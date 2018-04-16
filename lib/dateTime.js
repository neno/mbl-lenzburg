function getDate(dateStr) {
  return new Date(dateStr);
}

export function formattedDate(dateStr) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = getDate(dateStr);
  return date.toLocaleDateString('de-DE', options);
}

export function formattedTime(dateStr) {
  const date = getDate(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes() || '00';
  return `${hours}:${minutes}`;
}
