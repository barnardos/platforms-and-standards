---js
{
	layout: "main-aside",
	title: "Smoketesting | Accessibility | Standards as a platform | Barnardo's",
	desc: "Accessibility smoketestig methodology",
	permalink: "standards/web-accessibility/smoketesting/",
	pageTitle: "Smoketesting",
	pageTaxonomy: "content",
	tags: "content-standard",
	extract: "Accessibility smoketesting methodology",
	themeModifier: "standards",
	eleventyNavigation: {
		key: "Accessibility smokestesting",
		parent: "Web accessibility"
	},
	longPage: true
}
---

## Smoketesting

Occasonally, we're asked to evaluate third-party websites that may have been commissioned from external agencies. This is **not a full audit** which is a time-consuming process, but an accessibility evaulation of a few representative pages to get a general feel of the accessibility of a site.

This methodology would also be appropriate if we're asked to evaluate some third party software for internal use.

### Choose representative pages 
How many really depends on the time and resources available (and the size/ complexity of the site being smoketested). If the vendor/ requestor has not nominated any, these are good candidates:

- the homepage, or similarly expected high-traffic page
- a page with the most complex form
- a page with the most complex interactive widgets (accordians/ popovers/ dialogue boxes)
- a page with videos or audio
- a page that uses drag and drop functionality

### Testing methodology
Dept of Work and Pensions' Accessibility Manual has a nicely-structured list of [Basic accessibility checks](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks), with a downloadable spreadsheet containing a sheet per candidate page and a page with step-by-step instructions on how to test.

Note that [Step 1 ('Automated tools')](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks/1-automated-tools-how-to-test) is no longer necessary as valid HTML is no longer an accessibility requirement.

Other steps, eg [Step 10 (Session Timeouts)](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks/10-session-timeouts-how-to-test) may not be relevant to every page.

Note that **many of the guidelines are a judgement call**. Criteria like "Headings and labels are clear and descriptive" or "Alt text for important images is clear and accurate" cannot be tested by a machine, and your idea of "clear" as a Barnardo's employee may not be the same as a vulnerable child's idea of "clear". Try to keep a potential service user in mind.

### Caveat testor 
As stated above, this is **not** a comprehenive audit. As DWP writes,
> The intent of this basic checklist is to cover the most common WCAG failures. Completing this checklist will not guarantee your service is fully compliant with WCAG.

### Testing resources

- [VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)
- [NVDA Keyboard Shortcuts (Windows)](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
- [VoiceOver Gestures on iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts)
- [Talkback Gestures on Android](https://dequeuniversity.com/screenreaders/talkback-shortcuts)
- [Tota11y](/standards/web-accessibility/resources/#tota11y) has the up-to-date algorithm for text contrast. But note that it compares the CSS ccolor and background; it can't "see" pixels if text is overlaid on a picture, or evaluate UI elements (arrows, icons etc). Use CCA (below) for that.
- - [Colour Contrast Analyzer (CCA)](https://www.tpgi.com/color-contrast-checker/)



