const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback');

const MAX_CHARACTERS = 50;
messageFeedback.textContent =
  `${MAX_CHARACTERS - messageInput.value.length} character${addS(
    MAX_CHARACTERS - messageInput.value.length)} left`;
messageInput.addEventListener('input', (event) => {
  const text = event.target.value;
  if (text.length <= MAX_CHARACTERS) {
    const count = MAX_CHARACTERS - text.length;
    messageFeedback.textContent =
      `${count} character${addS(count)} left`;
    if (messageFeedback.classList.contains('invalid-feedback')) {
      messageFeedback.classList.remove('invalid-feedback');
    }
    messageFeedback.classList.add('valid-feedback');
    if (messageInput.classList.contains('is-invalid')) {
      messageInput.classList.remove('is-invalid');
    }
    messageInput.classList.add('is-valid');
  } else {
    const count = text.length - MAX_CHARACTERS;
    messageFeedback.textContent =
      `${count} character${addS(count)} too long`;
    if (messageFeedback.classList.contains('valid-feedback')) {
      messageFeedback.classList.remove('valid-feedback');
    }
    messageFeedback.classList.add('invalid-feedback');
    if (messageInput.classList.contains('is-valid')) {
      messageInput.classList.remove('is-valid');
    }
    messageInput.classList.add('is-invalid');
  }
});

// Write your code here
