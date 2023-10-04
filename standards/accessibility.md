---js
{
	layout: "main-aside",
	title: "Accessibility | Standards as a platform | Barnardo's",
	desc: "Barnardo's online platforms accessibility standards",
	permalink: "standards/web-accessibility/",
	pageTitle: "Web accessibility",
	pageTaxonomy: "content",
	tags: "standard",
	extract: "How we make sure people with disabilities can use our online products.",
	themeModifier: "standards",
	eleventyNavigation: {
		key: "Web accessibility",
		parent: "Standards"
	}
}
---

It is a legal and moral obligation to make web content and functionality available to people with disabilities. This includes but is not limited to:

- Vision impairment
- Hearing impairment
- Cognitive impairment
- Fine motor control impairment
- Physical impairment
- Injury
- Siezure susceptibility
- Neurodiversity
- Motion sickness
- Reading level

Primarily, write semantic HTML. Without this rock solid base for your content, any later efforts to bolt on accessibility will fall short. Developers must familiarise themselves with the [HTML living standard](https://html.spec.whatwg.org/multipage/) so that they use the best element for each piece of structure, content, and interaction.

All Barnardo's web pages must achieve [WCAG](https://www.w3.org/TR/WCAG21/) (web content accessibility guidelines) AA conformance throughout, and level AAA conformance where possible. Restated:  <strong>AA conformance is a minimum, not a goal</strong>.

All text content must have a Flesch-Kincaid Grade Level of 4.2 or lower. To see the Flesch-Kincaid Grade Level in Word [follow these steps](https://support.microsoft.com/en-us/office/get-your-document-s-readability-and-level-statistics-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2).

Automated accessibility tools can pick up some problems, but manual testing is required to meet many success criteria. For example an automated tool cannot check if alternative text is descriptive and relevant.

Product owners must never allow the use of accessibility overlays. The people who use Barnardo's products deserve better, and any product that carries the Barnardo's name must provide better.

We recommend [TetraLogical](https://tetralogical.com/) for accessibility testing and reporting if the relevant expertise is not present in the team building your product.

## Tota11y
<p>Drag this bookmarklet into your bookmark bar. <a href="https://web.archive.org/web/20230106155321/https://tota11y.babylontech.co.uk/">Instructions</a>.

<a style="text-justify:center; border:1px solid green; width:50%; padding:.5em; margin:1em auto;display:block;" href="javascript:(function()%7Bvar tota11y%3Ddocument.createElement(%27SCRIPT%27)%3Btota11y.type%3D%27text/javascript%27%3Btota11y.src%3D%27https://cdn.jsdelivr.net/gh/brucelawson/Tota11y-1/dist/tota11y.min.js%27%3Bdocument.getElementsByTagName(%27head%27)%5B0%5D.appendChild(tota11y)%3B%7D)()%3B">Tota11y2</a></p>

## Reading list

- https://www.w3.org/TR/html-aria/
- https://www.w3.org/TR/using-aria/
- https://stevefaulkner.github.io/HTML5accessibility/

## Suggested feeds

- https://tink.uk/
- https://www.scottohara.me/
- https://www.smashingmagazine.com/category/accessibility/
- https://adactio.com/tags/accessibility
- https://adrianroselli.com/posts
