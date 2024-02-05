export default function formatDate(date: string, times: string) {
  const data = date;
  const hora = times;

  const formatData = data.split('-').reverse().join('/');

  const dateAppointment = `${formatData}-${hora}`

  return dateAppointment;
}