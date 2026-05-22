'use client'; /* ใช้กับเวลาที่ user ต้องโต้ตอบ */

export default function AppButton() {
    const handleClick = () => alert("❤️❤️❤️ for Chihiro");
  return (
    <button onClick={handleClick}>
      Click me to send love to Rokuhira Chihiro! ❤️
    </button>
  );
}