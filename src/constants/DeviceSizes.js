const size = {
	mobile: "600px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const device = {
	mobile: `@media (min-width: ${size.mobile})`,
	tablet: `@media (min-width: ${size.tablet})`,
	laptop: `@media (min-width: ${size.laptop})`,
	desktop: `@media (min-width: ${size.desktop})`,
};