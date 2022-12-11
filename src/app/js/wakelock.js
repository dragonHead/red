let wakeLock = null;

const isSupported = "wakeLock" in navigator ? true : false;
console.debug("isSupported", isSupported);

/**
 * 起動ロック
 */
export async function requestWakeLock() {
  if (!isSupported) return;

  try {
    wakeLock = await navigator.wakeLock.request("screen");
    console.debug(`Locked`);

    wakeLock.onrelease = () => console.debug("Released");
  } catch (err) {
    console.error(`${err.name} ${err.message}`);
  }
}

/**
 * 起動ロック開放
 */
export function releaseWakeLock() {
  if (wakeLock === null || !isSupported) return;
  wakeLock.release().then(() => (wakeLock = null));
}

/**
 * 起動ロック再取得
 */
export function handleVisibilityChange() {
  if (wakeLock === null || document.visibilityState !== "visible") return;
  requestWakeLock();
}
