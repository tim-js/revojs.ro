---
path: "/blog/conference-content-accessibility"
date: "2019-07-30"
title: "Conference content accessibility"
---

Conference accessibility involves 2 different parties: **organizers** and **speakers**.

While the organizers have their own responsibilities in regard to accessibility, the content of the conference is delivered by the speakers, so they have to make sure that their delivery is accessible as well.

In this post we will focus on what can speakers do in order to make their presentations more accessible:

1. [**provide content warnings**](#provide-content-warnings) for flashing content, audio/video/animations, strong language or violent content;
2. [**use large fonts**](#use-large-fonts) for all the content on slides, code editors and CLI tools;
3. [**use high contrast**](#use-high-contrast) in your slides, code editors and CLI tools;
4. [**use magnifying tools**](#use-magnifying-tools) for anything that you cannot control the size of, like operating system menus and buttons;
5. [**describe in words all visual content**](#describe-in-words-all-visual-content) to make it available for people that cannot see or from from the screen;

## Provide content warnings

We all have good intentions, especially when we want to present something in front of a crowd. But the content that we deliver might hurt some people from the audience, both physically and emotionally.

That's why it helps a lot to **provide content warnings at the beginning of your talk** for various types of content:

### Flashing content, animations or videos

Keep in mind that there are people suffering from [Photosensitive Epilepsy](https://www.webmd.com/epilepsy/guide/photosensitive-epilepsy-symptoms-causes-treatment) and certain types of images might cause them a seizure. You should warn the audience if your presentation contains any of the following:

- **flashing content** (videos, transitions, animations, etc);
- **constrasting patterns** (ie: white stripes on black background);
- **videos or animations** with high-contrast content;

### Audio content

Seizures could also be triggered by various types of sounds when a person suffers from [Musicogenic Epilepsy](https://epilepsyontario.org/musicogenic-seizures/) or [ADPEAF](https://ghr.nlm.nih.gov/condition/autosomal-dominant-partial-epilepsy-with-auditory-features). You should warn the audience if your presentation contains any of the following:

- buzzing, humming or ringing sounds;
- music or songs;

### Strong language

Generally speaking, [profanity](https://en.wikipedia.org/wiki/Profanity) should be avoided in conference talks, because even though part of the audience might enjoy it, there will be another part which might be offended.

Ask yourself _"Why do you want to use strong language?"_, _"What reaction do you expect?"_. Could you rephrase your content to avoid it?

If you really want to stick with it, then please make sure you warn your audience if your presentation contains any of the following, in written or verbal form:

- hate speech;
- cursing;
- swearing;
- blasphemous language;
- vulgar language;
- anything else that could be considerred offensive;

You should display a warning like the following:

> This presentation contains strong language

### Violent content

Some people from your audience might be emotionally affected by certain types of content that could be considered as violent, so it should be avoided.

However, if this kind of content is required for your presentation, then please make sure to warn your audience about it, using a warning like:

> This presentation contains visual content that some viewers may find disturbing

### Sexual content

Sexual or sexist content should be **completely avoided**.

## Use large fonts

Maybe this is obvious and easy to do. But remember how many times did you tell a fellow speaker to increase the font size because you can't see the text or the code.

This applies to all the content that you display on the screen:

- slides;
- code editors and IDEs;
- terminals and CLI;
- browser content;

The minimum recommended font size is:

- **40pt** for slides;
- **28pt** for code and CLI;

---

Also to keep in mind:

- **don't display large chunks of code**, maximum 5-6 lines per screen;
- **always check if the smallest text is visible from the back of the room.** Depending on the size of the room and the screen, you might need to adjust the font size.

Always remember that nobody will ever tell you that the font is too big.

## Use high contrast

Some LED screens might have very bright colors, while an old projector might have low contrast. So, having a good contrast from start will make sure your content is well displayed on any screen.

We suggest to stick as much as you can with **black and white**, unless you are considering the different levels of [color blindness](https://en.wikipedia.org/wiki/Color_blindness).

Always use **dark colors on light background** or **light colors on dark background**. Try to avoid colored text on colored background.

**NOTE**: code editors and CLI tools should also have high contrast color themes if you use them during your presentation.

## Use magnifying tools

Some content that you might present cannot be zoomed, like:

- operating system menus;
- code editors or browser buttons, etc;

For content that you cannot control the size of, you should use the accessibility magnifying tools from your operating system, to magnify the area that you want to present:

- for Mac: https://mcmw.abilitynet.org.uk/macos-mojave-magnifying-screen;
- for Windows: https://support.microsoft.com/en-us/help/11542/windows-use-magnifier-to-make-things-easier-to-see;

## Describe in words all visual content

This is a big topic, and a very important one. The basic idea is to describe in words all the visual content that you present.

Please watch the 1st minute of this talk by [Clarissa Peterson](https://youtu.be/V7tRWuXlOak?t=11).

The idea is to have a "blind-first approach", pretending that your audience cannot see, so you should do whatever is necessary to deliver the content in words, just like an audio book:

- never say _"as you can see"_ without describing in words what the screen displays;
- never say _"then we go here"_ without describing in words what "here" means;
- don't use images, memes or gifs without describind what they contain or represent;

### Live coding

Describing code is a bit more difficult, but not impossible.

- **Describe the code that you display on the screen**. It doesn't have to be line-by-line, but it must explain what the code does.
- **Describe the code that you write**, don't rely on what people see on the screen.
- **Describe the code changes when you switch branches**. That's sometimes difficult to grasp even if you are able to see the code.

---

You might think: _"But what if my talk is very visual? How could a blind person experience what I'm presenting?"_. The answer is **imagination**.

Think about reading a book. You get no visual content, only text. But if the text describes what you should imagine, then you just visualize it.

---

Describing in words all your visual content has huge benefits:

- **it can be displayed on screen**, if there are live captions at the conference, so hearing impaired people also benefit from it;
- **live captions text can be used in transcripts** on the recorded videos, so everybody around the world can benefit from them as well;

## Conclusion

Making conference content more accessible is not difficult. We just have to start caring about the entire audience:

- low vision or blind;
- hearing impairment;
- epilepsy;
- dyslexia;
- non native speakers of the language that you present in;

Please feel free to [drop us an email](info@revojs.ro) if you think we should add anything to this guidelines.
