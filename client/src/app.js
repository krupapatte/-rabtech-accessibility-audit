const status = document.querySelector("#status");
const button = document.querySelector("#check-status");

button.addEventListener("click", async () => {
  status.textContent = "Checking service…";
  button.disabled = true;
  try {
    const response = await fetch("http://localhost:3001/api/health");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    status.textContent = `API status: ${data.status}`;
  } catch {
    status.textContent = "Could not reach the API. Check that the server is running.";
  } finally {
    button.disabled = false;
  }
});
