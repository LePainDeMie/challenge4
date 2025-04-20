// Minimal navbar (1-6) logic + VAT Calculator JS

document.addEventListener('DOMContentLoaded', function () {
  // Navbar logic
  const navBtns = document.querySelectorAll('.nav-btn');
  const pageSections = document.querySelectorAll('.page-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const pageNum = btn.getAttribute('data-page');
      pageSections.forEach(section => {
        if (section.id === `page-${pageNum}`) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // VAT calculator logic (for page 1)
  const form = document.getElementById('vat-form');
  if (form) {
    const rawPriceInput = document.getElementById('raw-price');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const rawPrice = parseFloat(rawPriceInput.value);
      if (isNaN(rawPrice) || rawPrice < 0) {
        resultDiv.textContent = 'Please enter a valid non-negative price.';
        resultDiv.classList.remove('text-green-600');
        resultDiv.classList.add('text-red-600');
        return;
      }
      const vatRate = 0.185;
      const finalPrice = rawPrice * (1 + vatRate);
      resultDiv.textContent = `Final price (incl. 18.5% VAT): ${finalPrice.toFixed(2)}`;
      resultDiv.classList.remove('text-red-600');
      resultDiv.classList.add('text-green-600');
    });
  }

  // Multiplication table logic (for page 2)
  const tableForm = document.getElementById('table-form');
  if (tableForm) {
    const tableInput = document.getElementById('table-number');
    const tableResult = document.getElementById('table-result');
    tableForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const n = parseInt(tableInput.value, 10);
      if (isNaN(n) || n < 2 || n > 9) {
        tableResult.textContent = 'Please enter a number from 2 to 9.';
        tableResult.classList.add('text-red-600');
        return;
      }
      tableResult.classList.remove('text-red-600');
      let table = '';
      for (let i = 1; i <= 10; i++) {
        table += `${n} × ${i} = ${n * i}\n`;
      }
      tableResult.textContent = table;
    });
  }

  // Array calculations logic (for page 3)
  const calcBtn = document.getElementById('calc-array-btn');
  if (calcBtn) {
    const values = [3, 11, 7, 2, 9, 10];
    const resultsDiv = document.getElementById('array-results');

    function sumArray(arr) {
      return arr.reduce((a, b) => a + b, 0);
    }
    function avgArray(arr) {
      return arr.length ? sumArray(arr) / arr.length : 0;
    }
    function minMaxArray(arr) {
      return {
        min: Math.min(...arr),
        max: Math.max(...arr)
      };
    }

    calcBtn.addEventListener('click', function () {
      const sum = sumArray(values);
      const avg = avgArray(values);
      const { min, max } = minMaxArray(values);
      resultsDiv.innerHTML =
        `Sum: <strong>${sum}</strong><br>` +
        `Average: <strong>${avg.toFixed(2)}</strong><br>` +
        `Min: <strong>${min}</strong><br>` +
        `Max: <strong>${max}</strong>`;
    });
  }

  // Temperature converter logic (for page 4)
  const cToFForm = document.getElementById('c-to-f-form');
  if (cToFForm) {
    const celsiusInput = document.getElementById('celsius');
    const cToFResult = document.getElementById('c-to-f-result');
    cToFForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const c = parseFloat(celsiusInput.value);
      if (isNaN(c)) {
        cToFResult.textContent = 'Please enter a valid Celsius value.';
        cToFResult.classList.add('text-red-600');
        return;
      }
      cToFResult.classList.remove('text-red-600');
      const f = c * 9 / 5 + 32;
      cToFResult.textContent = `${c}°C = ${f.toFixed(2)}°F`;
    });
  }
  const fToCForm = document.getElementById('f-to-c-form');
  if (fToCForm) {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const fToCResult = document.getElementById('f-to-c-result');
    fToCForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const f = parseFloat(fahrenheitInput.value);
      if (isNaN(f)) {
        fToCResult.textContent = 'Please enter a valid Fahrenheit value.';
        fToCResult.classList.add('text-red-600');
        return;
      }
      fToCResult.classList.remove('text-red-600');
      const c = (f - 32) * 5 / 9;
      fToCResult.textContent = `${f}°F = ${c.toFixed(2)}°C`;
    });
  }

  // Reverse string logic (for page 5)
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  const reverseForm = document.getElementById('reverse-form');
  if (reverseForm) {
    const reverseInput = document.getElementById('reverse-input');
    const reverseResult = document.getElementById('reverse-result');
    reverseForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputStr = reverseInput.value;
      reverseResult.textContent = reverseString(inputStr);
    });
  }

  // Count vowels logic (for page 6)
  function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  const vowelForm = document.getElementById('vowel-form');
  if (vowelForm) {
    const vowelInput = document.getElementById('vowel-input');
    const vowelResult = document.getElementById('vowel-result');
    vowelForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputStr = vowelInput.value;
      const numVowels = countVowels(inputStr);
      vowelResult.textContent = `Vowel count: ${numVowels}`;
    });
  }
});
