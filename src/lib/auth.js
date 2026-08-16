const USERS_KEY = "rias_users";
const SESSION_KEY = "rias_session";

const DEMO_EMAIL = "demo@riaskarsa.id";
const DEMO_PASSWORD = "demo1234";

function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(16);
}

function getStore(key) {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(window.localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function setStore(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function toSafeUser(user) {
  if (!user) return null;
  const { passwordHash, ...safe } = user;
  return safe;
}

function ensureSeed() {
  const users = getStore(USERS_KEY);
  if (!Array.isArray(users)) {
    const seeded = [
      {
        name: "Demo Rias Karsa",
        email: DEMO_EMAIL,
        phone: "081234567890",
        role: "MUA Pemula",
        passwordHash: hash(DEMO_PASSWORD),
        createdAt: new Date().toISOString(),
      },
    ];
    setStore(USERS_KEY, seeded);
    return seeded;
  }
  if (!users.some((u) => u.email === DEMO_EMAIL)) {
    users.push({
      name: "Demo Rias Karsa",
      email: DEMO_EMAIL,
      phone: "081234567890",
      role: "MUA Pemula",
      passwordHash: hash(DEMO_PASSWORD),
      createdAt: new Date().toISOString(),
    });
    setStore(USERS_KEY, users);
  }
  return users;
}

export function registerUser({ name, email, phone, role, password }) {
  const users = ensureSeed();
  const normalized = email.trim().toLowerCase();
  if (users.some((u) => u.email === normalized)) {
    return { ok: false, error: "Email sudah terdaftar. Silakan masuk." };
  }
  const newUser = {
    name: name.trim(),
    email: normalized,
    phone: phone.trim(),
    role,
    passwordHash: hash(password),
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  setStore(USERS_KEY, users);
  setStore(SESSION_KEY, normalized);
  return { ok: true, user: toSafeUser(newUser) };
}

export function loginUser(email, password) {
  const users = ensureSeed();
  const normalized = email.trim().toLowerCase();
  const user = users.find((u) => u.email === normalized);
  if (!user || user.passwordHash !== hash(password)) {
    return { ok: false, error: "Email atau password salah." };
  }
  setStore(SESSION_KEY, normalized);
  return { ok: true, user: toSafeUser(user) };
}

export function logoutUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser() {
  ensureSeed();
  const session = getStore(SESSION_KEY);
  if (!session) return null;
  const users = getStore(USERS_KEY);
  const user = Array.isArray(users) ? users.find((u) => u.email === session) : null;
  return toSafeUser(user);
}