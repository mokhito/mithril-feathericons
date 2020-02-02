const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="8" y1="6" x2="21" y2="6" /> <line x1="8" y1="12" x2="21" y2="12" /> <line x1="8" y1="18" x2="21" y2="18" /> <line x1="3" y1="6" x2="3.01" y2="6" /> <line x1="3" y1="12" x2="3.01" y2="12" /> <line x1="3" y1="18" x2="3.01" y2="18" /></svg>`) } }