# File Naming Convention

- Kebab-case only: All files must be named using kebab-case (e.g., user-profile.ts, api-handler.ts).
- Prohibited: PascalCase, camelCase, snake_case

# Component Architecture

## Sub-Component Pattern

Use sub-components for nested layout, NOT props:

```tsx
// GOOD
<Component>
  <Component.Sub>content</Component.Sub>
</Component>

// BAD - props overload
<Component title="..." description="..." image="..." />
```

## Props Rule

Props are for styling/behavior at each level only:
- className, variant, size, align
- NOT for passing nested content

## Container Pattern

It's okay to create predefined Container components that wrap basic components and accept data via props:

```tsx
// GOOD - FaqContainer wraps basic Faq components, accepts data as props
<FaqContainer faqs={[{ question: "...", answer: "..." }]} />

// The underlying basic components stay DRY (no value props)
<FaqItem>
  <FaqQuestion>...</FaqQuestion>
  <FaqAnswer>...</FaqAnswer>
</FaqItem>
```

Basic components = sub-component pattern (no value props)
Container components = convenience wrappers that accept data props

# Layout Rules

## Page Structure

Stack ContentWrapper sections:

```tsx
<>
  <ContentWrapper isFirstSection>...</ContentWrapper>
  <ContentWrapper>...</ContentWrapper>
  <ContentWrapper background="bg-gray-100">...</ContentWrapper>
</>
```

## Use Components

Always prefer existing components over raw HTML/divs:
- ContentWrapper
- SimpleGrid, SimpleCard
- Hero2Column
- TabGroup, TabNavigation, TabItem, TabContent
- TimelineAsSteps, TimelineAsStepsStep
- Typo.H1, Typo.H2, Typo.H3, Typo.Paragraph
- ContactButton
