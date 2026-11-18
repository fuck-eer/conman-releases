const REPO = process.env.GITHUB_RELEASES_REPO ?? "fuck-eer/conman-releases";

export interface PlatformDownloads {
	mac_dmg?: string;
	mac_zip?: string;
	win_installer?: string;
	win_portable?: string;
	linux_appimage?: string;
	linux_deb?: string;
	version?: string;
}

interface GitHubAsset {
	name: string;
	browser_download_url: string;
}

interface GitHubRelease {
	tag_name: string;
	assets: GitHubAsset[];
}

function mapAssetToPlatform(
	name: string,
): keyof Omit<PlatformDownloads, "version"> | null {
	const lower = name.toLowerCase();

	if (lower.endsWith(".dmg")) return "mac_dmg";
	if (lower.endsWith(".zip") && (lower.includes("mac") || lower.includes("darwin")))
		return "mac_zip";
	if (lower.endsWith(".exe") && (lower.includes("setup") || lower.includes("install")))
		return "win_installer";
	if (lower.endsWith(".exe") && !lower.includes("setup") && !lower.includes("install"))
		return "win_portable";
	if (lower.endsWith(".appimage")) return "linux_appimage";
	if (lower.endsWith(".deb")) return "linux_deb";

	return null;
}

const CACHE_TTL_MS = 10 * 60 * 1000;
let cached: { data: PlatformDownloads; expiresAt: number } | null = null;

export async function fetchLatestRelease(): Promise<PlatformDownloads> {
	if (cached && Date.now() < cached.expiresAt) {
		return cached.data;
	}

	const res = await fetch(
		`https://api.github.com/repos/${REPO}/releases/latest`,
		{
			headers: { Accept: "application/vnd.github.v3+json" },
			next: { revalidate: 600 },
		},
	);

	if (!res.ok) {
		if (cached) return cached.data;
		throw new Error(`GitHub API error: ${res.status}`);
	}

	const release: GitHubRelease = await res.json();
	const downloads: PlatformDownloads = { version: release.tag_name };

	for (const asset of release.assets) {
		const key = mapAssetToPlatform(asset.name);
		if (key) {
			downloads[key] = asset.browser_download_url;
		}
	}

	cached = { data: downloads, expiresAt: Date.now() + CACHE_TTL_MS };
	return downloads;
}
