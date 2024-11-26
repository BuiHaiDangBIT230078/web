document.addEventListener("DOMContentLoaded", () => {
    // Danh sách thẻ lưu trữ tạm
    const cards = [];

    // Hàm đăng ký thẻ
    window.registerCard = function () {
        const name = document.getElementById("name").value;
        const className = document.getElementById("class").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;

        if (!name || !className || !birthdate) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }

        // Tạo thẻ và thêm vào danh sách
        const card = { name, className, birthdate, gender };
        cards.push(card);

        // Hiển thị danh sách
        renderCards();
        document.getElementById("library-card-form").reset();
    };

    // Hàm hiển thị danh sách thẻ
    function renderCards() {
        const tbody = document.querySelector("#card-list tbody");
        tbody.innerHTML = ""; // Xóa nội dung cũ

        cards.forEach((card, index) => {
            const row = `
                <tr>
                    <td>${card.name}</td>
                    <td>${card.className}</td>
                    <td>${card.birthdate}</td>
                    <td>${card.gender}</td>
                    <td><button onclick="deleteCard(${index})">Xóa</button></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Hàm xóa thẻ
    window.deleteCard = function (index) {
        cards.splice(index, 1);
        renderCards();
    };
});
