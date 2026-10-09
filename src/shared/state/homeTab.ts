// Active tab of the signed-in home quote card. The header reads it so the Products menu names the
// product being quoted (Figma: "Motor" / "Travel" / "Road Tax" highlighted on the home page).
export type HomeTab = "car" | "travel" | "tax"

let current: HomeTab = "car"
const listeners = new Set<() => void>()

export const homeTab = {
    get: () => current,
    set: (tab: HomeTab) => {
        if (tab === current) return
        current = tab
        listeners.forEach((l) => l())
    },
    subscribe: (l: () => void) => {
        listeners.add(l)
        return () => { listeners.delete(l) }
    },
}
