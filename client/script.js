const memberInputs = [...document.querySelectorAll("[data-member]")];
const groupMessage = document.querySelector("#group-message");
const copyButton = document.querySelector("#copy-button");

function updateGroupMessage() {
  const members = memberInputs.map((input) => input.value.trim()).filter(Boolean);
  groupMessage.textContent = `Grupo: ${members.join(", ")} | Pessoa escolhida: Katherine Johnson`;
}

memberInputs.forEach((input) => input.addEventListener("input", updateGroupMessage));

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(groupMessage.textContent);
    copyButton.textContent = "✓  comentário copiado";
    window.setTimeout(() => {
      copyButton.textContent = "▣  copiar comentário";
    }, 2200);
  } catch {
    copyButton.textContent = "selecione o texto acima";
  }
});

updateGroupMessage();
