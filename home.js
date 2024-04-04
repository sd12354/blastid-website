document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
      hideLoader();
      showContent();
      view();
  }, 1500);
  function hideLoader() {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
  }
  function view() {
    const text = document.getElementById("loading-text");
    text.style.display = "none";
  }
  function showContent() {
      const content = document.getElementById("content");
      content.style.display = "block";
      const text = document.getElementById("loading-text");
      text.style.display = "block";
  }
});
