
- Thanks `tuan hoang` and `CoderSchool` for creating this link: `https://github.com/coderschool/cs-react-timer-starter-code`

- import Function vào Component `import { formatTime } from './formatTime';`

- Tập làm quen với giá trị `isLoading` ex: `const isStart = useRef(true)` để bắt đầu hay kết thúc một loạt lệnh nào đó

- Dùng ref để điều chỉnh chế độ `focus, disabled,...`

- Khi dùng `setInterval`, cho dù nó có `isLoading =false` thì nó vẫn chạy ngầm. PHẢI CLEAR trước khi tái sử dụng bằng `clearInterval`, nếu không setInterval sẽ đc add thêm vào và chạy NHIỀU FUNCTION A trong cùng 1s.

- Combo trick thời gian: `formatTimer.js`