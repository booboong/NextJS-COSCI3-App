import AppButton from "./app-button";

export default function AppHeader() {   /* พิมพ์​ np ก่อน แล้ว enter */
    const isShow = true;
    const characters = ["Rokuhira Chihiro", "Togo Shiba", "Azami", "Char", "Hinao", "Hakuri"];

  return (
    <div>
        <h1>Kagurabachi</h1>
        <p>Rokuhira Chihiro lover!</p>
        {
            characters.length > 0 ? <p>พบตัวละคร</p> : <p>ไม่พบตัวละคร</p>  
        }
        {
            characters.length > 0 && <p>มีตัวละครทั้งหมด {characters.length} คน</p>
            /* ? คือ if else ใช้ปิดเงื่อนไข (ตรง if):(ไม่ตรง if / else) */
        }
        {
        isShow && <hr />  /* && คือ if แปลว่า ถ้าเป็นจริง แสดงเส้น แต่ถ้าเป็นเท็จ จะไม่แสดง */
        }
    </div>
  );
}