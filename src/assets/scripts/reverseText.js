const reverseTextInput = document.querySelector('.reverse-text-input');
const reverseTextBtn = document.querySelector('.reverse-text-button');
const reversedTextSpan = document.querySelector('.reversed-text');
const reversedTextTitleSpan = document.querySelector('.reverse-text-result__title');
reverseTextBtn.addEventListener('click', reverseText);

function reverseText() {
  const reverseTextInputValue = reverseTextInput.value;
  const isReversedTitleSpanShown = reversedTextTitleSpan.classList.contains('is-open');
  if (!isReversedTitleSpanShown && reverseTextInputValue) {
    reversedTextTitleSpan.classList.add('is-open');
  }
  if (reverseTextInputValue) {
    const reversedTextVersion = reverseTextInputValue.split('').reverse().join('');
    reverseTextInput.value = '';
    reversedTextSpan.textContent = reversedTextVersion;
  }
}
