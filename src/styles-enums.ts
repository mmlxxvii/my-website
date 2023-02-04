enum StatusColors {
    offline = "rgb(66, 66, 66)",
    online = "rgb(0, 255, 64)",
    idle = "rgb(255, 145, 0)",
    dnd = "rgb(255, 0, 43)",
}

enum BgGradient {
    offline = "radial-gradient(rgba(255, 255, 255, 0.025), rgb(0, 0, 0))",
    online = "radial-gradient(rgba(0, 255, 64, 0.025), rgb(0, 0, 0))",
    idle = "radial-gradient(rgba(255, 145, 0, 0.025), rgb(0, 0, 0))",
    dnd = "radial-gradient(rgba(255, 0, 13, 0.025), rgb(0, 0, 0))",
}

enum BoxShadow {
    offline = "0px 0px 20px rgba(167, 167, 167, 0.151)",
    online = "0px 0px 20px rgba(0, 255, 64, 0.301)",
    idle = "0px 0px 20px rgba(255, 145, 0, 0.151)",
    dnd = "0px 0px 20px rgba(255, 0, 13, 0.151)"
}

export { BoxShadow, BgGradient, StatusColors}