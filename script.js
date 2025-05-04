function calculateTime() {
    const fileSize = parseFloat(document.getElementById('fileSize').value);
    const unit = document.getElementById('fileUnit').value;
    const speed = parseFloat(document.getElementById('speed').value);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(fileSize) || isNaN(speed) || fileSize <= 0 || speed <= 0) {
      resultDiv.textContent = '⚠️ Please enter valid numbers for both fields.';
      return;
    }
  
    // Convert file size to megabits
    const sizeInMegabits = unit === 'GB' ? fileSize * 8000 : fileSize * 8;
  
    // Calculate time in seconds
    const timeInSeconds = sizeInMegabits / speed;
  
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    resultDiv.textContent = `⏱ Estimated Download Time: ${hours}h ${minutes}m ${seconds}s`;
  }
  