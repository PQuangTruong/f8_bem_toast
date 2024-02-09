function toast({
    title = "",
    message = "",
    type = "info",
    duration = 3000,
  }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");

      // Auto remove toast
      const autoRemove = setTimeout(function() {
        main.removeChild(toast)
      }, duration + 1000)

      // Remove toast when clicked
      toast.onclick = function(e) {
        if(e.target.closest('.toast__close')) {
            main.removeChild(toast);
            clearTimeout(autoRemove)
        }
      }

      const icons = {
        success: "fa-solid fa-circle-check",
        info: "fa-solid fa-circle-info",
        error: "fa-solid fa-triangle-exclamation",
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
      toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
                <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
        `;
      main.appendChild(toast);

    }
  }

  function showSuccessToast() {
    toast({
      title: "Success",
      message: "Bạn đã show thành công ",
      type: "success",
      duration: 3000,
    });
  }

  function showInfoToast() {
    toast({
      title: "Infomation",
      message: "Thông tin của bạn đã đươc Update",
      type: "info",
      duration: 3000,
    });
  }

  function showErrorToast() {
    toast({
      title: "Error",
      message: "Bạn đã gặp lỗi! ",
      type: "error",
      duration: 3000,
    });
  }