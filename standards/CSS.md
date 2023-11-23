---js
{
	layout: "main-aside",
	title: "CSS | Standards as a platform | Barnardo's",
	desc: "Barnardo's online platforms CSS standards",
	permalink: "standards/css/",
	pageTitle: "CSS",
	pageTaxonomy: "content",
	tags: "standard",
	extract: "Resources for responsive CSS",
	themeModifier: "standards",
	eleventyNavigation: {
		key: "CSS",
		parent: "Standards"
	}
}
---

Our Headless CMS architecture uses CSS rather than any framework-dependant flavour or variant (Tailwind/ CSS-in-JS etc).
- Tutorials and code fragments from the web will Just Work.
- It means our knowledge is portable.
- When new CSS comes to [evergreen browsers](https://css-tricks.com/evergreen-does-not-mean-immediately-available/), we can use it (rather than waiting for a framework to implement it/ allow it).
- We don't add to a build step by requiring some transpilation step
- We don't do "CSS-in-JS" which has to be parsed and executed by users' browsers. Therefore we achieve [better performance](/standards/web-performance/).


## Responsive Design

When responsive design first became popular, CSS Media Queries were the only tool we had and it became popular to code to certain breakpoints: desktop, tablet (generally 'latest iPad') and mobile. However, different viewport sizes proliferate.

Andy Bell ran a 48 hour test and found over 120,000 datapoints with over 2,300 unique viewport sizes,  concluding that [the ideal viewport doesn't exist](https://viewports.fyi) and therefore that a catch-all set of 'breakpoints' can't exist.

Luckily, new CSS layout methods are universally supported by evergreen browsers, the most useful of which is CSS Grid, so now we can (largely) dispense with hardcoded media queries and allow Grid to fluidly resize according to the content.

Some useful links:

- [Create a responsive grid layout](https://piccalil.li/tutorial/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/) - "Even with no media-queries, we can create a flexible and powerful responsive layout". Andy Bell, with stealable code.

- [Responsive CSS Layout Grids without Media Queries](https://www.sitepoint.com/responsive-css-layout-grids-without-media-queries/) - tutorial by Stephanie Eckles with lots of examples.

- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) - by Josh Comeau. 

- [Grid by Example](https://gridbyexample.com) - 
Everything you need to learn CSS Grid Layout, by Rachel Andrew who helped write the spec. With Copy and paste code for numerous different layouts.

- [SmolCSS](https://smolcss.dev) - "borrowable" minimal snippets for modern CSS layouts and components, by Stephanie Eckles.

- [Building out a furniture site from Dribbble](https://set.studio/reality-check-1-building-out-a-furniture-site-from-dribbble/) - Andy Bell takes a web design and builds it with Grid. This was good for me to understand how to think about applying the CSS and thinking through the process.

## Books/ paid for thingies
(But Derek will pay for them because he's a gent).

- [CSS Master](https://www.sitepoint.com/premium/books/css-master-3rd-edition/) by Tiffany Brown. A real PDF book (as in Printed on Dead Foliage, that you can hold in your hand, or an ebook).
- [Every Layout](https://every-layout.dev) - an online course by Andy Bell and Heydon Pickering. "Through a series of simple, composable layouts, Every Layout will teach you how to better harness the built-in algorithms that power browsers and CSS… Employing algorithmic layout design means doing away with @media breakpoints, “magic numbers”, and other hacks, to create context-independent layout components."

