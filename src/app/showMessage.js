export function showMessage(message, type = 'success') {
  Toastify({
    text: message,
    duration: 2000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'bottom', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === 'success' ? 'grey' : 'red',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
