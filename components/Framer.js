const m = require("mithril")
module.exports = { view: (vnode) => { return m.trust(`<svg width="${vnode.attrs.width || "24"}" height="${vnode.attrs.height || "24"}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="${vnode.attrs.fill || "none"}" stroke="${vnode.attrs.stroke || "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" /></svg>`) } }