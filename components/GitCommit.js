const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="4" /> <line x1="1.05" y1="12" x2="7" y2="12" /> <line x1="17.01" y1="12" x2="22.96" y2="12" /></svg>`) } }