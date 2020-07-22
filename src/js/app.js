export default function phoneNormalize(phone) {
  return phone.replace(/[^\d+]/g, '')
    .replace(/^(\d{10})$/, '+7$1')
    .replace(/^8(\d{10})$/, '+7$1')
    .replace(/^(\d+)$/, '+$1');
}
