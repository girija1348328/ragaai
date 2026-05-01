export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) return;

  const permission = await Notification.requestPermission();
  return permission;
};

export const sendNotification = async (title: string, body: string) => {
  const registration = await navigator.serviceWorker.getRegistration();

  if (registration) {
    registration.active?.postMessage({
      type: "SHOW_NOTIFICATION",
      title,
      body,
    });
  }
};