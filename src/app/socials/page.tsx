import type { Metadata, Viewport } from "next";
import Link from "next/link";
import {
	FaDiscord,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaReddit,
	FaSpotify,
	FaSteam,
} from "react-icons/fa";
import { SiBluesky, SiGmail, SiOnlyfans } from "react-icons/si";

export const metadata: Metadata = {
	title: "Socials",
	description: "Connect with me on various social platforms",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

const socialLinks = [
	{
		name: "Gmail",
		icon: <SiGmail size={24} />,
		url: "mailto:canbinh.5079@gmail.com",
		color:
			"bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] border-[#1DA1F2]/30",
	},
	{
		name: "Instagram",
		icon: <FaInstagram size={24} />,
		url: "https://www.instagram.com/tentaolabinh",
		color:
			"bg-[#6e5494]/10 hover:bg-[#6e5494]/20 text-white border-[#6e5494]/30",
	},
	{
		name: "OnlyFans",
		icon: <SiOnlyfans size={24} />,
		url: "https://onlyfans.uk/yuu",
		color:
			"bg-[#1b2838]/10 hover:bg-[#1b2838]/20 text-white border-[#1b2838]/30",
	},
	{
		name: "Spotify",
		icon: <FaSpotify size={24} />,
		url: "https://open.spotify.com/user/fga3qjr87mon59z306by4eom3",
		color:
			"bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] border-[#1DB954]/30",
	},
	{
		name: "Facebook",
		icon: <FaFacebook size={24} />,
		url: "https://www.facebook.com/YuuIride",
		color:
			"bg-[#FF4500]/10 hover:bg-[#FF4500]/20 text-white border-[#FF4500]/30",
	},
	{
		name: "Discord",
		icon: <FaDiscord size={24} />,
		url: "https://discord.com/users/886779922851434516",
		color:
			"bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2] border-[#5865F2]/30",
	},
];

export default function SocialsPage() {
	return (
		<div className="container mx-auto px-4 md:px-8 py-4 md:py-6 max-w-7xl">
			<h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide text-white">
				My Socials <span className="text-[#ffb6c1]">♡</span>
			</h1>

			<p className="text-zinc-300 mb-8 max-w-2xl">
				Connect with me on various social media platforms. Feel free to reach
				out, follow, or just check out what I'm up to!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{socialLinks.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-center gap-4 p-6 rounded-xl border transition-all hover:scale-105 ${social.color}`}
					>
						<div className="p-3 bg-white/10 rounded-full">{social.icon}</div>
						<div className="flex-1">
							<h3 className="text-xl font-medium">{social.name}</h3>
							<p className="text-sm opacity-70">
								Connect with me on {social.name}
							</p>
						</div>
						<div className="text-xl">→</div>
					</Link>
				))}
			</div>
		</div>
	);
}
