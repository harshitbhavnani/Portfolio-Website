
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Home",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Harshit Bhavnani",
	description: "Data Science Graduate with a major in Business Analytics and prior experience in Technology Sales, Data Analytics, Quantitative Finance, Product Management & Sustainability Consulting.",
	image: profile.src,
	buttons: [
		{
			title: "Blog",
			link: "https://harshitbhavnani.wixsite.com/shiftingparadigms",
			isPrimary: false,
		},
		{
			title: "Contact",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1tjW90YdP93U9C6gqpgB88LTOmSgi85lj/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About",
	description: [
		"As a Data Science graduate with a passion for statistical analysis, I am eager to leverage my skills and knowledge in a challenging techno-managerial role within the Banking, Financial Markets, Strategy, and Risk Advisory sectors.",
		"Throughout my undergraduate studies, I was actively involved in student leadership roles and honed my debating skills, leading to my personal growth and development as a polished individual. I also founded a youth organization, organized multiple events, and received seed funds to start a social venture in the ed-tech sector.",
		"My contributions were recognized by my university, which awarded me the Student Ambassador Award for representing them at national and international events. I also earned a spot on the coveted list of India's brightest engineering minds, as part of the Economic Times Campus Stars competition, where engineering students from all around the country competed for the title.",
		"With experience in sustainability consulting, quantitative finance, product management, and technology management, I am confident that my versatile background and skills can bring value to a dynamic team and drive impactful solutions.",
	],
}

export const work = {
	title: "Core Competencies",
	cards: [
		{
			title: "Data Analytics",
			description: "Statistical Analysis & Data Modelling for Technology-Driven Decision Making",
			icons: null,
		},
		{
			title: "Technology Sales",
			description: "Managing Complex Sales Cycles, Closing Deals & Delivering Solutions",
			icons: null,
		},
		{
			title: "Product Strategy",
			description: "Developing & Managing Products aligning with Market Demand & Business Goals",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Twenty-First Century African Youth Movement",
			description: "Managed AYM's $10k Google Ads campaign to increase donations, reach wider audience, recruit diverse volunteers, and promote social events.",
		},
		{
			title: "Intraday Trading Calls",
			description: "Executable intraday trading tool generating buy-sell calls based on technical analysis for stocks listed in the NSE of India.",
		},
		{
			title: "Park Street Journal",
			description: "Founded a youth organization working as a digital news agency with the aim of providing unbiased, unfiltered & accurate information to the youth of India.",
		},
	],
}

export const contact = {
	title: "Contact",
	description: "Feel free to get in touch with me via email or connect with me on LinkedIn.",
	buttons: [
		{
			title: "Email",
			link: "mailto:harshit.bhavnani@gmail.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/harshitbhavnani/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Harshit Bhavnani | Analytics | Product | Strategy",
	description: "Data Science Graduate with a major in Business Analytics & experience in Technology Sales, Data Analytics, Quantitative Finance, Product Management & Consulting",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@harshitbhavnani",
	description: "Analytics | Product | Strategy",
	cards: [
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/harshitbhavnani/",
		},
		{
			title: "Github",
			link: "https://github.com/harshitbhavnani",
		},
		{
			title: "Blog",
			link: "https://harshitbhavnani.wixsite.com/shiftingparadigms",
		},
	],
}