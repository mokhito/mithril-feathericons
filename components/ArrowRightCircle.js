const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10" /> <polyline points="12 16 16 12 12 8" /> <line x1="8" y1="12" x2="16" y2="12" /></svg>`) } }