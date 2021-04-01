const xp = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}bloqueados
  ├─ ❏ ${prefix}participantes
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *XP*
  │
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  └─ ❏ ${prefix}mining
--------------------------------
Note: Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling nya.`
}
exports.xp = xp
