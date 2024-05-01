---js
{
	layout: "main-aside",
	title: "PDF and video | Content | Standards as a platform | Barnardo's",
	desc: "Barnardo's online platforms writing guidelines",
	permalink: "standards/creating-content/PDF-video/",
	pageTitle: "PDFs and video",
	pageTaxonomy: "content",
	tags: "content-standard",
	extract: "Ensuing non-HTML content is accessible",
	themeModifier: "standards",
	eleventyNavigation: {
		key: "PDF & video",
		parent: "Creating content"
	},
	longPage: true
}
---

## PDF

Any document we publish in PDF format must be accessible. The best way to do this is to export as PDF from Microsoft Office (or equivalent, eg, Pages on Mac).

Accessible PDFs contain invisible tags to give information to assistive technologies, e.g. screen readers.

If the Office source document is structured correctly (uses headings, describes images etc) that will go a long way to an accessible end result as these PDF tags are generated when the document is ‘exported as PDF’.

PDFs made from badly-structured source documents must be tagged manually, usually with the £20/month subscription to Adobe Acrobat Pro. This is a slow, time-consuming, manual process.

If any change is made to the unstructured source document, **the exported PDF must be retagged from scratch**.

Note that **PDF is usually a poor choice of format for publishing on the web** because it is designed to be identical to print and therefore does not re-flow content easily for smaller devices etc. The Welsh government has good advice on the [kind of documents that are PDF candidates](https://www.gov.wales/publishing-pdfs-and-other-files-govwales#49671).

### Start with a structured document

Structuring a document correctly, using headings and describing images and not attempting fancy layouts goes a long way towards an accessible end-result.

* [Make your Word documents accessible to people with disabilities ](https://support.microsoft.com/en-gb/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d)
* [Create accessible documents, spreadsheets or presentations with Pages, Numbers or Keynote](https://support.apple.com/en-gb/102031)

### Export your structured document to PDF

Microsoft users should follow the [Welsh Government’s guidance on exporting to PDF](https://www.gov.wales/how-create-accessible-word-documents#134130).

Mac users should Export as PDF, choose Advanced Options and turn accessibility on.

### Check the PDF

The best way to do this with Adobe Acrobat Pro, or ask an assistive technology user to check.

A web-based utility is at [pave-pdf.org/pave/index.html](https://pave-pdf.org/pave/index.html) (there’s a Windows utility at [pdfua.foundation/en/pac-download/](https://pdfua.foundation/en/pac-download/) - I haven’t used it).

### Repair any errors
U.S. Department of Health & Human Services has a handy 51 page guide (!) to [Tagging PDF’s in Adobe Acrobat Pro](https://www.hhs.gov/sites/default/files/pdf-tagging.pdf).

#### Repairs don’t round-trip
If the document needs changing (e.g. there is a mistake) you need to go back to square one and amend the source document, re-generate the PDF, re-check the PDF and, if repairs or manually tagging is required, retag the PDF from scratch.

### Conclusion

Don’t use PDFs! Publish as webpages and ensure that a good print stylesheet is in place.

## Video and captioning

Video (and audio) content is compelling and engaging but must be accessible. This means providing a transcript. A transcript "burned on" a video is not enough. (This means captions that are in the video, that can't be copied and pasted, resized independantly of the video, or auto-translated).

Meryl Evans, [a Deaf accessibility consultant, writes](https://meryl.net/why-captioned-videos-are-important/)
> closed captions are the best option. They let the viewer be in control of the captions. When you use open captions, the user can’t change the size or color… Closed captions are flexible and change size based on the screen size. Also, if you work with the player controls, the captions move up a little so they’re still in full view.

Closed captions must be available, either as downloadable transcript or as synchronised subtitles.

Some videos have content that communicates information that is only communicated visually. These require audio description, which the [Royal National Institute of Blind People  describes](https://www.rnib.org.uk/living-with-sight-loss/assistive-aids-and-technology/tv-audio-and-gaming/audio-description-ad/#:~:text=What%20is%20Audio%20Description%3F,the%20programme%20clear%20through%20sound):
> Audio description (AD) is additional commentary that explains what’s happening on screen. AD describes body language, expressions and movements, making the programme clear through sound.

The UK government has basic guidance on [Adding an audio description to your videos](https://gcs.civilservice.gov.uk/guidance/accessible-communications/adding-an-audio-description-to-your-videos/).

Because this audio description must be scripted, acted and timed to coincide with pauses in other dialogue or music, it's part of video production and **can't be retrospectively applied by the web team**; it's **an essential content task**.


## A sample captioning workflow

Get the audio transcribed (either by hand or by machine; [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) is cheap and excellent). Check the transcript, and make any necessary corrections.

Assuming you use MacWhisper or a similar product that can generate timestamps for you, save as a [subtitle file (.srt)](https://docs.fileformat.com/video/srt/).

Here's the .srt-formatted subtitles of a short video I've made about the merits of cheese (using puppets because Equity-rate actors were beyond my budget):

<pre>
<code>
1
00:00:00,000 --> 00:00:05,500
Hello, I really like cheese. 
Do you like cheese?

2
00:00:05,500 --> 00:00:08,500
No, cheese is crap.
</code>
</pre>

.srt files are just text files, so you can edit with any plain text editor (eg Notepad. don't use Word; it adds formatting).

Add the name of the speaker when the speaker changes. In UK and Europe, it's common (but not compulsory) to use the name plus a colon; in USA it's common to surround the speaker name with square brackets. (See [A guide to the visual language of closed captions and subtitles](https://uxdesign.cc/a-guide-to-the-visual-language-of-closed-captions-and-subtitles-2fda5fa2a325)   for more information.)

<pre>
<code>
1
00:00:00,000 --> 00:00:05,500
[Mrs Wigglepig] Hello, I really like cheese. 
Do you like cheese?

2
00:00:05,500 --> 00:00:08,500
[Arthur the Naughty] No, cheese is crap.
</code>
</pre>

Once this is done, upload the video to YouTube, use the 'add subtitles' feature, making sure to use the 'has timestamps' radio button.

### If you don't have timestamped subtitles

Adding timestamps by hand is a pain. You can upload a text-only subtitles file to YouTube, *don't* choose 'has timestamps', and YouTube will autosync the timestamps with the audio. Once this is done, you can edit the auto-synchronised subtitles to add speaker names.

(The auto-syncing process can take a while -even days- depending on how busy YouTube's servers are, and how much YouTube likes you personally. But the video should not be made public until the subtitles are finished.)

## Embedding videos into our pages

Embedding subtitled YouTube videos into our pages is simple, and the subtitles are accessible but still hosted on YouTube. This means our site search won't index the content of the video, and any Google search for our content would go to YouTube rather than our sites.

It's possible to embed the collapsed transcript below the video accessibly and performantly, with the [HTML details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

Here's a live example; click the triangle to expose the transcript.  

<figure style="border: 1px solid #ccc; padding:10px;">
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom:1em; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube-nocookie.com/embed/RbToefFd6xw' frameborder='0' allowfullscreen></iframe></div>
<figcaption>
<details>
<summary>Transcript</summary>
[Mrs Wigglepig] Hello, I really like cheese. 
Do you like cheese?

[Arthur the Naughty] No, cheese is crap.
</details>
</figcaption>
</figure>

Note that the timestamps are not included in this embedded transcript, because it's a text file, and not synchronised with the video.





