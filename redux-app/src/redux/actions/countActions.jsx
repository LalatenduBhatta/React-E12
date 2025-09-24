
export function increment() {
    return { type: "increment" }
}

export function decrement() {
    return { type: "decrement" }
}

export function update(number) {
    return { type: "update", payload: number }
}