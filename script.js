// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Add user's message
    chatBox.innerHTML += `
      <div class="mb-2"><strong>You:</strong> ${userMessage}</div>
    `;

    // Add fake AI reply
    setTimeout(() => {
      chatBox.innerHTML += `
        <div class="mb-2"><strong>AI:</strong> This is a sample response. (Soon it’ll be real.)</div>
      `;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
  });
});
