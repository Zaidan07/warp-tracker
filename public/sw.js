self.addEventListener("install", () => {
    console.log("Service Worker installed.");
  });
  
  self.addEventListener("fetch", () => {
    // Optional: caching bisa ditambahkan di sini
  });
  