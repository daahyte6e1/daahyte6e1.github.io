const TELEGRAM_BOT_TOKEN = '7227730536:AAEqur7u47YIl5gdPEjS3T8rvhMVmSwcvBk'
import { validate } from '@telegram-apps/init-data-node';

const validateInitData = (telegramInitData) => validate(telegramInitData, TELEGRAM_BOT_TOKEN)

const getUserInfoFromTGData = (initData) => {
  const params = new URLSearchParams(initData)
  const userParam = params.get('user');
  return JSON.parse(decodeURIComponent(userParam));
}
const processingUser = (user) => {
  const collectionInterval = 8 * 60 * 60 * 1000; // 8 часов в миллисекундах
  const now = Date.now();
  const timeSinceLastCollection = now - user.last_claimed;
  return {
    claiming_speed: user.claiming_speed,
    first_name: user.first_name,
    isEmpty: false,
    points: user.points,
    telegram_id: user.telegram_id,
    username: user.username,
    timeLeft: Math.max(0, collectionInterval - timeSinceLastCollection),
    can_claim: collectionInterval <= timeSinceLastCollection

  }
}
export {
  validateInitData,
  getUserInfoFromTGData,
  processingUser
}

