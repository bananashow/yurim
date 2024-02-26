export const handleCopyAddress = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('주소를 복사했습니다.');
  } catch (err) {
    console.error(err);
  }
};
