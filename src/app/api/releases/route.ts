import { fetchLatestRelease } from "@/lib/github";

export async function GET() {
	try {
		const downloads = await fetchLatestRelease();

		return Response.json(downloads, {
			headers: {
				"Cache-Control": "public, s-maxage=600, stale-while-revalidate=120",
			},
		});
	} catch {
		return Response.json(
			{ error: "Failed to fetch releases" },
			{ status: 502 },
		);
	}
}
