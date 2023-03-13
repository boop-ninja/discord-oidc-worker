module.exports = {
  token: process.env["DISCORD_TOKEN"] ?? "",
  clientId: process.env["DISCORD_CLIENT_ID"] ?? "00000000000000",
  clientSecret: process.env["DISCORD_CLIENT_SECRET"] ?? "AAAAAAAAAAAAAAAAAAA",
  redirectURL:
    process.env["DISCORD_REDIRECT_URL"] ??
    "https://YOURNAME.cloudflareaccess.com/cdn-cgi/access/callback",
  serversToCheckRolesFor:
    process.env["DISCORD_SERVERS_LIST"]?.split(",").map((e) => e.trim()) ?? [],
};
