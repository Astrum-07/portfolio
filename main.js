const btn = document.getElementById('langBtn');
const options = document.getElementById('langOptions');
const selected = document.getElementById('selectedLang');
const items = options.querySelectorAll('li');


btn.addEventListener('click', () => {
  options.classList.toggle('hidden');
});


items.forEach(item => {
  item.addEventListener('click', () => {
    selected.textContent = item.textContent; 
    options.classList.add('hidden');
  });
});


document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !options.contains(e.target)) {
    options.classList.add('hidden');
  }
});


  const langBtn = document.getElementById("langBtn");
  const langOptions = document.getElementById("langOptions");
  const selectedLang = document.getElementById("selectedLang");

  langBtn?.addEventListener("click", () => {
    langOptions.classList.toggle("hidden");
  });

  langOptions?.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      selectedLang.textContent = li.textContent;
      langOptions.classList.add("hidden");
    });
  });
