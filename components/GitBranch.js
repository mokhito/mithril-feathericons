const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg xmlns="http://www.w3.org/2000/svg" width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="6" y1="3" x2="6" y2="15" /> <circle cx="18" cy="6" r="3" /> <circle cx="6" cy="18" r="3" /> <path d="M18 9a9 9 0 0 1-9 9" /></svg>`) } }