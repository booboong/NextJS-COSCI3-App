import { useEffect, useState } from "react";
export default function AppFooter() {

  const [company, setCompany] = useState("Shonen Jump");

  const currentDate = <div>{new Date().toLocaleDateString()}</div>;

  useEffect(() => {
    // มันจะขึ้นตอนกดเปิด console (กด command + F12 ในเว็บ) รีหน้าก็ขึ้นใหม่
    console.log("เอ็นเท็น");
  }); // ทำทุกครั้งที่มีการอัปเดตคอมโพเนนต์

  useEffect(() => {
    console.log("เปิดปราณปลาทอง");
  }, []); // [] คือ ทำแค่ครั้งเดียวตอนที่คอมโพเนนต์ถูกสร้างขึ้น

    useEffect(() => {
    console.log("เรียกคุโระ");
  }, [company]); // [company] คือ ทำครั้งแรกและตอนที่ตัวแปร company อัปเดตค่า, ใส่แบบ [a, b, c] คือ ทำตอนที่ตัวแปร a, b หรือ c อัปเดตค่า

  const handleMouseOver = () => {
    // console.log("เห้ย แอบส่องโค้ดอ๋อ");
    setCompany("โชเนนจัมป์"); // ฟังก์ชั่นใช้อัปเดตค่าเมื่อเมาส์อยู่เหนือข้อความ
  }

  return (
    <div>
        <hr /> {/* เส้นคั่น */}
        <p onMouseOver={handleMouseOver}>{company}</p>
        {currentDate}
        <p>&copy; {new Date().getFullYear()} All rights reserved ⎜ Takeru Hokazono</p>
    </div>
  );
}