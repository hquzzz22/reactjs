import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
function Pharagraph() {
const value = useContext(ThemeContext)
return (
    <p className={value.theme}>
        Về việc kiện toàn thành viên Ban Chỉ đạo quốc gia triển khai thực hiện cam kết của Việt Nam tại Hội nghị lần 
        thứ 26 các bên tham gia Công ước khung của Liên hợp quốc về biến đổi khí hậu
    </p>
)
}
export default Pharagraph