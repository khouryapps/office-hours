elf.addEventListener('push', function (event) {
  const options = {
    body: event.data ? event.data.text() : 'You have a new Office Hours notification!',
  };

  event.waitUntil(
    (async () => {
      await self.registration.showNotification('Office Hours Notification', options);
      playNotificationSound();
    })()
  );
});

function playNotificationSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
}
