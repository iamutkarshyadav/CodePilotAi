// Simple toast notification system
export interface ToastOptions {
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

export function showToast(
  message: string,
  options: ToastOptions = { type: "info" },
) {
  // Create toast element
  const toast = document.createElement("div");
  toast.className = `fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;

  // Set styling based on type
  switch (options.type) {
    case "success":
      toast.className +=
        " bg-green-500/20 border border-green-500/30 text-green-400";
      break;
    case "error":
      toast.className += " bg-red-500/20 border border-red-500/30 text-red-400";
      break;
    case "warning":
      toast.className +=
        " bg-yellow-500/20 border border-yellow-500/30 text-yellow-400";
      break;
    default:
      toast.className +=
        " bg-blue-500/20 border border-blue-500/30 text-blue-400";
  }

  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="flex-1">${message}</div>
      <button class="text-gray-400 hover:text-white transition-colors" onclick="this.parentElement.parentElement.remove()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;

  // Add to document
  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-x-full");
  }, 100);

  // Auto remove
  const duration = options.duration || 5000;
  setTimeout(() => {
    toast.classList.add("translate-x-full");
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 300);
  }, duration);
}

export const toast = {
  success: (message: string) => showToast(message, { type: "success" }),
  error: (message: string) => showToast(message, { type: "error" }),
  warning: (message: string) => showToast(message, { type: "warning" }),
  info: (message: string) => showToast(message, { type: "info" }),
};
