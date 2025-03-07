export const environment = {
  production: true,
  apiBaseUrl: "/api/",
  apiVersion: "2",
  appTitle: "Paperless-ng",
  version: "1.4.2",
  webSocketHost: window.location.host,
  webSocketProtocol: (window.location.protocol == "https:" ? "wss:" : "ws:")
};
