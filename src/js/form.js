const form = document.getElementById("request-form");
const errorBlock = document.getElementById("form-error");
const successBlock = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // перед отправкой – очистить и спрятать
  errorBlock.textContent = "";
  errorBlock.style.display = "none";
  successBlock.style.display = "none";

  const formData = new FormData(form);

  let response;
  try {
    response = await fetch("/backend/submit.php", {
      method: "POST",
      body: formData,
    });
    
  } catch (err) {
    errorBlock.textContent = "Сервер недоступен.";
    errorBlock.style.display = "block";
    return;
  }


  let data;
  try {
    data = await response.json();
  } catch (err) {
    errorBlock.textContent = "Некорректный ответ сервера.";
    errorBlock.style.display = "block";
    return;
  }

  console.log("Ответ сервера:", data);
  if (data.success) {
    // УСПЕХ: форму скрываем, ошибку прячем
    form.style.display = "none";
    errorBlock.style.display = "none";
    errorBlock.textContent = "";
    successBlock.style.display = "block";
  } else {
    // ОШИБКА: показываем сообщение
    errorBlock.textContent = data.error || "Ошибка отправки.";
    errorBlock.style.display = "block";
    successBlock.style.display = "none";
  }
});
