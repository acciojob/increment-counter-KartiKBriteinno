document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter');
  const incrementBtn = document.getElementById('incrementBtn');

  incrementBtn.addEventListener('click', () => {
    const currentValue = parseInt(counterElement.textContent);
    alert(`Current value: ${currentValue}`);  // Display the un-incremented value
    counterElement.textContent = currentValue + 1;  // Increment the counter
  });
});