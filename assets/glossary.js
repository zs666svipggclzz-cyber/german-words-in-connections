const filter = document.querySelector('#ending');
const count = document.querySelector('#word-count');
const words = Array.from(document.querySelectorAll('.word'), (element) => ({
  element,
  ending: element.querySelector('code').textContent.trim(),
}));

for (const ending of [...new Set(words.map((word) => word.ending))].sort()) {
  filter.add(new Option(ending, ending));
}

function filterWords() {
  const ending = filter.value;
  let visible = 0;

  for (const word of words) {
    const matches = ending === '' || ending === word.ending;
    word.element.hidden = !matches;
    visible += Number(matches);
  }

  count.textContent = visible === 1 ? '1 word' : `${visible} words`;
}

filter.addEventListener('change', filterWords);
window.addEventListener('pageshow', filterWords);
filterWords();
document.querySelector('#ending-filter').hidden = false;
