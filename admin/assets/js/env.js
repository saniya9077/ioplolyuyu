window.EP_ENV = { API_BASE: "https://6xv8bgcm-4000.inc1.devtunnels.ms" };
window.apiBase = function apiBase() {
  return String((window.EP_ENV && window.EP_ENV.API_BASE) || "https://6xv8bgcm-4000.inc1.devtunnels.ms").replace(/\/$/, '');
};
