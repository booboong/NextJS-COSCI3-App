import AppLoading from "../components/app-loading";

export default function Loading() {
  return (
    // ถ้าไม่ใช้ div ใช้ <> เรียกว่า fragment ทำหน้าที่เหมือน div แต่ไม่สร้าง element
    <>
      <AppLoading />
    </>
  );
}