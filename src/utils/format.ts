export const formatDateTime = (inputDateTime: string) => {
  const dateTime = new Date(inputDateTime);
  const date = dateTime.toISOString().split('T')[0];
  const time = `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ? '0' : ''}${dateTime.getMinutes()}`;
  return `${date} ${time}`;
};
