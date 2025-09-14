// Script para compartir el lineup en redes sociales
document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementById("share-lineup-btn");

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      // Crear menú de opciones de compartir
      showShareOptions();
    });
  }
});

function showShareOptions() {
  // Crear overlay para el menú de compartir
  const overlay = document.createElement("div");
  overlay.className = "share-overlay";
  overlay.innerHTML = `
    <div class="share-modal">
      <div class="share-header">
        <h3>Compartir Lineup</h3>
        <button class="close-share" onclick="closeShareModal()">×</button>
      </div>
      <div class="share-options">
        <button class="share-option" onclick="shareToWhatsApp()">
          <span class="share-icon">📱</span>
          WhatsApp
        </button>
        <button class="share-option" onclick="shareToInstagram()">
          <span class="share-icon">📸</span>
          Instagram
        </button>
        <button class="share-option" onclick="shareToTwitter()">
          <span class="share-icon">🐦</span>
          Twitter/X
        </button>
        <button class="share-option" onclick="shareToFacebook()">
          <span class="share-icon">📘</span>
          Facebook
        </button>
        <button class="share-option" onclick="copyLink()">
          <span class="share-icon">🔗</span>
          Copiar Enlace
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Cerrar al hacer clic en el overlay
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closeShareModal();
    }
  });
}

function closeShareModal() {
  const overlay = document.querySelector(".share-overlay");
  if (overlay) {
    overlay.remove();
  }
}

function shareToWhatsApp() {
  const text = "¡Mira el increíble lineup del Music Festival! 🎵🎉";
  const url = window.location.href;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(
    text + " " + url
  )}`;
  window.open(shareUrl, "_blank");
  closeShareModal();
}

function shareToInstagram() {
  // Para Instagram, copiamos el enlace ya que no hay API directa
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert(
      "Enlace copiado. Pega el enlace en tu historia de Instagram junto con una captura del lineup! 📸"
    );
  });
  closeShareModal();
}

function shareToTwitter() {
  const text = "¡Mira el increíble lineup del Music Festival! 🎵🎉";
  const url = window.location.href;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;
  window.open(shareUrl, "_blank");
  closeShareModal();
}

function shareToFacebook() {
  const url = window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
  closeShareModal();
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("¡Enlace copiado al portapapeles! 🔗");
    })
    .catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("¡Enlace copiado al portapapeles! 🔗");
    });
  closeShareModal();
}

// Hacer las funciones globales para que funcionen en onclick
window.closeShareModal = closeShareModal;
window.shareToWhatsApp = shareToWhatsApp;
window.shareToInstagram = shareToInstagram;
window.shareToTwitter = shareToTwitter;
window.shareToFacebook = shareToFacebook;
window.copyLink = copyLink;
