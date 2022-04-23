export const linkActiv = (active) => {
  const baseS = { mardginleft: '50px' }
    if (active.isActive) {
        return { color: "#209430", ...baseS} 
    }
    return { color: "#212121", ...baseS}
}