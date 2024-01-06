import {
	blockchain,
	frontend,
	fullstack,
	backend,
	ethereum,
	ethers,
	solidity,
	truffle,
	ux,
	prototyping,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	figma,
	docker,
	postgresql,
	rubyrails,
	graphql,
	komikult,
	leaderboard,
	zappt,
	ml_cars,
	math,
	movie,
	nyeusi,
	coverhunt,
	dcc,
	kelhel,
	microverse,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "experience",
		title: "Experiences",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Developer",
		icon: fullstack,
	},
	{
		title: "Frontend Developer",
		icon: frontend,
	},
	{
		title: "UI/UX Design",
		icon: ux,
	},
	{
		title: "Software Prototyping",
		icon: prototyping,
	},
	// {
	// 	title: "Blockchain Developer",
	// 	icon: blockchain,
	// },
];

const technologies = [
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "Node.Js",
		icon: nodejs,
	},
	{
		name: "PostgreSQL",
		icon: postgresql,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "HTML",
		icon: html,
	},
	{
		name: "CSS",
		icon: css,
	},
	{
		name: "Blockchain",
		icon: blockchain,
	},
	{
		name: "Ethereum",
		icon: ethereum,
	},
	{
		name: "Solidity",
		icon: solidity,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Full-Stack Developer",
		company_name: "Self Employed",
		icon: coverhunt,
		iconBg: "#333333",
		date: "09 / 2021 - current",
	},
	{
		title: "Full-Stack Developer",
		company_name: "Inf Tech Total Services Co",
		icon: microverse,
		iconBg: "#333333",
		date: "08 / 2019 - 08 / 2021",
	},
	{
		title: "Backend Developer",
		company_name: "Acer Synergy Tech Corp",
		icon: kelhel,
		iconBg: "#333333",
		date: "10 / 2018 - 07 / 2019",
	},
	{
		title: "Java Developer",
		company_name: "Acer Synergy Tech Corp",
		icon: kelhel,
		iconBg: "#333333",
		date: "07 / 2015 - 09 / 2018",
	},
];

const projects = [
	// {
	// 	id: "project-1",
	// 	name: "DefiPrime",
	// 	description:
	// 		"Reconstruct the Adele application using modern technologies and methodologies to provide a seamless interactive experience to users with optimized performance.",
	// 	tags: [],
	// 	image: komikult,
	// 	repo: "https://github.com/defiprime/defiprime",
	// 	demo: "https://defiprime.com/",
	// },
	{
		id: "project-2",
		name: "Qashboard",
		description:
			"Connect all of your accounts to browse transactions, analyze spend & use your personal AI assistant to ask Q&A for precise insights.",
		tags: [],
		image: leaderboard,
		repo: "https://github.com/DragonKnight0522/financegpt",
		demo: "https://app.qashboard.com/",
	},
	{
		id: "Zappt",
		name: "Zappt",
		description:
			"Spend Less Time Looking and More Time Doing",
		tags: [],
		image: zappt,
		repo: "https://github.com/godit-ai",
		demo: "https://zappt.app",
	},
	{
		id: "ml-cars",
		name: "ml-cars",
		description:
			"Learn machine learning fundamentals",
		tags: [],
		image: ml_cars,
		repo: "https://github.com/DragonKnight0522/ml-cars",
		demo: "https://ml-cars.vercel.app/",
	},
	// {
	// 	id: "project-3",
	// 	name: "NFT Suits",
	// 	description: "This is a Nft game",
	// 	tags: [],
	// 	image: math,
	// 	repo: "https://github.com/NFTSuits/NFT-Marketplace-DApp",
	// 	demo: "http://ww25.nftsuits.com/",
	// },
	// {
	// 	id: "project-4",
	// 	name: "BitFact",
	// 	description: `Prove data with this complete toolkit. BitFact fingerprints information and then etches it on the Ethereum Blockchain.`,
	// 	tags: [],
	// 	image: movie,
	// 	repo: "https://github.com/zachalam/BitFact",
	// 	demo: "https://docs.bitfact.io/#/",
	// },
	// {
	// 	id: "project-5",
	// 	name: "Recurring Payments",
	// 	description:
	// 		"Recurring payments on the blockchain have been a topic of discussion for some time. First introduced in EIP-1337 in 2018, the proposal never really caught on. My approach to recurring payments on Ethereum takes a simpler approach than EIP-1337 did, which may help it have a larger impact on the community.",
	// 	tags: [],
	// 	image: nyeusi,
	// 	repo: "https://github.com/Jon-Becker/ethereum-recurring-payments",
	// 	demo: "https://jbecker.dev/research/ethereum-recurring-payments/",
	// },
];

export { services, technologies, experiences, projects };
