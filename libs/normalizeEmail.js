export function normalizeEmail(email) {
  if (email == null || email === "") {
    return "";
  }

  return String(email).trim().toLowerCase();
}
