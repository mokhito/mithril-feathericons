const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10" /> <line x1="12" y1="8" x2="12" y2="16" /> <line x1="8" y1="12" x2="16" y2="12" /></svg>`) } }