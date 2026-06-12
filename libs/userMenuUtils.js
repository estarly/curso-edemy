export function normalizePath(path) {
	return (path || "").replace(/\/$/, "") || "/";
}

export function isMenuItemActive(pathname, item) {
	const normalizedPath = normalizePath(pathname);

	if (item.match === "exact") {
		return normalizedPath === normalizePath(item.href);
	}

	const paths = item.activePaths?.length ? item.activePaths : [item.href];

	return paths.some((path) => {
		const normalizedHref = normalizePath(path);
		return (
			normalizedPath === normalizedHref ||
			normalizedPath.startsWith(`${normalizedHref}/`)
		);
	});
}
