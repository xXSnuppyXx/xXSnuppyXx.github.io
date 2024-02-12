document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const restartButton = document.getElementById('restart-button');
  const gifContainer = document.getElementById('gif-container');
  const gif = document.querySelector('#gif-container img');

  let noButtonClickCount = 0;
  let growWidth = 0;
  let growHeight = 0;

  yesButton.addEventListener('click', function() {
    gifContainer.classList.remove('hidden');
    gif.scrollIntoView({ behavior: 'smooth' });
    hideQuestionButtons();
    resetYesButtonSize(); // Añadir esta línea
  });

  noButton.addEventListener('click', function() {
    noButtonClickCount++;
    if (noButtonClickCount < 10) {
      switch (noButtonClickCount) {
        case 1:
          noButton.textContent = '¿Segura?';
          break;
        case 2:
          noButton.textContent = '100% segura?';
          break;
        case 3:
          noButton.textContent = '¿Segurisima?';
          break;
        case 4:
          noButton.textContent = '¿De veritas, de veritas?';
          break;
        case 5:
          noButton.textContent = '¿Segura de la muerte?';
          break;
        case 6:
          noButton.textContent = '¿Segura como la vida misma?';
          break;
        case 7:
          noButton.textContent = '¿Totalmente segura?';
          break;
        case 8:
          noButton.textContent = '¿En serio? Última oportunidad';
          break;
        case 9:
          noButton.textContent = '¡Es tu última oportunidad!';
          break;
      }
      growWidth += 10;
      growHeight += 10;
      yesButton.style.width = `calc(150px + ${growWidth}px)`;
      yesButton.style.height = `calc(50px + ${growHeight}px)`;
    } else if (noButtonClickCount === 10) {
      hideQuestionButtons();
      showRestartButton();
      showFinalYesButton();
    }
  });

  restartButton.addEventListener('click', function() {
    resetQuestionButtons();
    gifContainer.classList.add('hidden');
    showQuestionButtons();
  });

  function hideQuestionButtons() {
    document.getElementById('question').classList.add('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
  }

  function showQuestionButtons() {
    document.getElementById('question').classList.remove('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');
    restartButton.classList.add('hidden'); // Añadir esta línea
  }

  function showRestartButton() {
    restartButton.classList.remove('hidden');
  }

  function showFinalYesButton() {
    yesButton.classList.remove('hidden');
    yesButton.style.width = '100vw';
    yesButton.style.height = '100vh';
    yesButton.style.fontSize = '3rem';
    yesButton.textContent = '¡Si!';
  }

  function resetQuestionButtons() {
    noButtonClickCount = 0;
    noButton.textContent = 'No';
    yesButton.style.width = '150px';
    yesButton.style.height = '50px';
    yesButton.textContent = 'Sí';
  }

  function resetYesButtonSize() { // Añadir esta función
    yesButton.style.width = '150px';
    yesButton.style.height = '50px';
  }
});
