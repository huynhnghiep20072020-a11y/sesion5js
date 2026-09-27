const rawTicketCode = "   med-card-0428-ut   ";

const cleanTicketCode = rawTicketCode.trim().toUpperCase()
const isValidPrefix = cleanTicketCode.startsWith("MED-");

const departmentCode = cleanTicketCode.slice(4, 8); 

const isPriority = cleanTicketCode.includes("-UT");
const displayCode = cleanTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Phiếu ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);




//  kiểu dữ liệu Chuỗi (String) mang tính bất biến 
// phương thức như trim() hay toUpperCase() khi chạy xong sẽ sinh ra một chuỗi hoàn toàn mới trong bộ nhớ chứ  không can thiệp sửa đổi biến rawTicketCode ban đầu.

//   | Trường hợp kiểm thử          | Dữ liệu đầu vào   | Kết quả sai thực tế | Kết quả đúng mong đợi  |
//
//   | Case 1: KT tiền tố hợp lệ    | "   med-card-0428-ut   "| false                       | true                          
//   | Case 2: Cắt chuỗi mã khoa    | "   med-card-0428-ut   "| "ed-"                       | "CARD"                      
