---
type: PageLayout
title: Demo
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Thank You for Your Patience
      color: text-dark
    subtitle: Join Our Waitlist
    text: >
      We want to ensure the best experience possible for you. Sign-up to our
      waitlist and stay tuned for updates.
    actions:
      - type: Button
        label: Join Waitlist
        url: /waitlist
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: Return Home
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      url: /images/boho sunset.png
      altText: ''
      styles:
        self:
          borderRadius: x-large
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
  - type: FeaturedItemsSection
    items:
      - type: FeaturedItem
        title: Cassett
        tagline: Mindful Memos
        subtitle: >-
          Flip the page and experience an enhanced audio-visual journaling
          experience
        image:
          type: ImageBlock
          url: /images/cassett.svg
          altText: Company logo
          styles:
            self:
              margin:
                - ml-3
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            textAlign: left
            borderColor: border-neutralAlt
            borderStyle: none
            borderWidth: 0
            borderRadius: none
            flexDirection: row
        text: |
          [Read More ](/blog)→
    actions: []
    variant: small-list
    colors: bg-light-fg-dark
    styles:
      self:
        margin:
          - mb-20
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
        justifyContent: center
      subtitle:
        textAlign: center
slug: demo
isDraft: false
---
