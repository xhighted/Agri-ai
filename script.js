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
function recommendCrop() {
  const region = document.getElementById("region").value;
  const soil = document.getElementById("soil").value;
  const resultDiv = document.getElementById("crop-result");

  let recommendation = "No data available.";

  if (region === "rift_valley" && soil === "black") {
    recommendation = "🌽 Best Crop: Maize";
  } else if (region === "central" && soil === "red") {
    recommendation = "🥬 Best Crop: Cabbage";
  } else if (region === "coast" && soil === "sandy") {
    recommendation = "🥭 Best Crop: Mangoes";
  } else if (region === "western" && soil === "clay") {
    recommendation = "🍌 Best Crop: Bananas";
  } else if (region === "eastern" && soil === "red") {
    recommendation = "🌾 Best Crop: Sorghum";
  }

  resultDiv.textContent = recommendation;
}
