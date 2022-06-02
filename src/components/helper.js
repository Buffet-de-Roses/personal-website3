const workTime = () => {
  const now = new Date();
  const nowHour = now.getHours();
  if (nowHour >= 9 && nowHour <= 18) {
    return true;
  }
  return false;
}

export {
  workTime
}
