import Swal from 'sweetalert2';

const AlertInitiator = {
  showAlert({ title, message, icon }) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 3000,
      didOpen: (event) => {
        event.addEventListener('mouseenter', Swal.stopTimer);
        event.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  },
};

export default AlertInitiator;
