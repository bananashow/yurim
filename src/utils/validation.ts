export const phoneNumberValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target.value.replace(/\D/g, '');
  if (input.length <= 11) {
    const formattedPhone = input.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    return formattedPhone;
  }
};
