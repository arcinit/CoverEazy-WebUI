// Product picked on the home quote card (null until the user picks one). The header reads it so the
// Products menu names the chosen product (Figma: "Motor" / "Travel" / "Road Tax" highlighted on the home page).
export type HomeTab = "car" | "travel" | "tax"

let current: HomeTab | null = null
const listeners = new Set<() => void>()

export const homeTab = {
    get: () => current,
    set: (tab: HomeTab | null) => {
        if (tab === current) return
        current = tab
        listeners.forEach((l) => l())
    },
    subscribe: (l: () => void) => {
        listeners.add(l)
        return () => { listeners.delete(l) }
    },
}
