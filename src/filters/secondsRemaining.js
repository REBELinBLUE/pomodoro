const SECONDS_MINUTE = 60;

export default function secondsRemaining(value) {
  let remaining = Math.floor((value % SECONDS_MINUTE));

  if (remaining < 0) {
    remaining = 0;
  }

  return remaining;
}
