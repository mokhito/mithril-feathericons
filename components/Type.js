const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="4 7 4 4 20 4 20 7" /> <line x1="9" y1="20" x2="15" y2="20" /> <line x1="12" y1="4" x2="12" y2="20" /></svg>`) } }