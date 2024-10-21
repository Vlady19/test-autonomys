// api/space-pledge.js

export default function handler(req, res) {
  // Simule 8 PiB
  const spacePledged = BigInt(8 * 1024 ** 5);  // 8 PiB en bytes
  res.status(200).json({ spacePledged: spacePledged.toString() });
}

