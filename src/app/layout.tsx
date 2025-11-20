import type { Metadata, Viewport } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";

//Stats
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Sakura from "@/components/Sakura";

const aldrich = Aldrich({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mjba.my"),
	title: {
		default: "itzkr0bus",
		template: "%s",
	},
	description:
		"Hi! I'm MJ, a passionate developer who loves anime and gaming. Welcome to my portfolio! ♡(˶˃ ᵕ ˂˶)♡",
	keywords: [
		"MJ",
		"iaMJ",
		"MJBA",
		"Portfolio",
		"Developer",
		"Anime",
		"Gaming",
		"Web Development",
		"Weeb",
		"Otaku",
		"Kawaii",
	],
	authors: [{ name: "itzkr0bus" }],
	creator: "itzkr0bus",
	publisher: "itzkr0bus",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://mjba.my",
		siteName: "itzkr0bus's Portfolio",
		title: "itzkr0bus",
		description:
			"Hi! I'm itzkr0bus, a passionate developer who loves anime and gaming. Welcome to my portfolio! ♡(˶˃ ᵕ ˂˶)♡",
		images: [
			{
				url: "/icon.svg",
				width: 200,
				height: 200,
				alt: "itzkr0bus's Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "itzkr0bus",
		description:
			"Hi! I'm itzkr0bus, a passionate developer who loves anime and gaming. Welcome to my portfolio! ♡(˶˃ ᵕ ˂˶)♡",
		creator: "@itzkr0bus",
		images: ["/icon.svg"],
	},
	alternates: {
		canonical: "https://mjba.my",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={aldrich.className}>
				<Sakura />
				<Navbar />
				<main className="px-4 pt-24 pb-24 min-h-screen overflow-x-hidden max-w-screen-lg mx-auto">
					{children}
					<Analytics />
					<SpeedInsights />
				</main>
				<div className="py-4" />
			</body>
		</html>
	);
}
