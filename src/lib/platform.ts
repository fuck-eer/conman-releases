export type Platform = "mac" | "windows" | "linux";

export interface PlatformInfo {
	platform: Platform;
	label: string;
}

export function detectPlatform(): PlatformInfo {
	if (typeof navigator === "undefined") {
		return { platform: "windows", label: "Windows" };
	}

	const ua = navigator.userAgent.toLowerCase();

	if (ua.includes("mac")) {
		return { platform: "mac", label: "macOS" };
	}
	if (ua.includes("linux")) {
		return { platform: "linux", label: "Linux" };
	}
	return { platform: "windows", label: "Windows" };
}
