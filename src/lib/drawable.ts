import type { Action } from 'svelte/action'

export function sketch<O>(
	attach: (el: HTMLElement, opts: O) => { destroy(): void },
	opts?: O,
): Action<HTMLElement> {
	return (node) => {
		const s = attach(node, opts as O)
		return { destroy: () => s.destroy() }
	}
}