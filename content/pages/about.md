---
title: About
slug: about
sections:
  - title:
      text: Cassett
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: A therapeutic audio-visual experience
    text: >
      A memoir is meant to be personal. Your expression of self is meant to be
      limitless. Pairing both of these concepts together, Cassett promises a
      truly personalized experience without the inherent limitations of a
      memoir. Flip the page and experience the multi-dimensionality of an
      enhanced audio-visual journaling experience.
    actions:
      - label: View Demo
        url: /demo
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
    media:
      type: ImageBlock
      altText: Image alt text placeholder
      elementId: ''
      styles:
        self:
          borderRadius: medium
  - title:
      text: Team
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      - content/data/person1.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection
  - title:
      text: Open Positions
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Join Our Team
    items:
      - title: Business Development Lead
        subtitle: Sales & Marketing
        text: >
          The Business Development Lead will play a pivotal role in driving
          go-to-market activities. This individual will be responsible for
          developing and executing effective sales and marketing strategies to
          attract users and promote the company's products or services.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: UI/UX Designer
        subtitle: Engineering
        text: >
          The UI/UX Designer will play a crucial role in creating exceptional
          user experiences for our users. This individual will be responsible
          for designing intuitive, visually appealing, and user-friendly
          interfaces that meet the needs of our target audience.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Senior Software Engineer
        subtitle: Engineering
        text: >
          The Senior Software Engineer will play a critical role in developing
          and maintaining high-quality software solutions. This individual will
          work collaborate with product managers, architects, and other
          stakeholders to define and refine software requirements. They will
          also provide technical leadership to deliver innovative and scalable
          applications that meet the needs of consumers.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    actions:
      - label: Get In Touch
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
seo:
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
