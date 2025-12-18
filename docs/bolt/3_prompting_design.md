# Prompting Guide

This guide covers best practices for prompting in Bolt, applicable to both [Supabase mode](./1_supabase.md) and [External API mode](./2_external_api.md).

---

# AI Models

Bolt supports multiple AI models. Choose based on your task complexity and token budget:

| Model | Speed | Token Usage | Best For |
|-------|-------|-------------|----------|
| **Haiku** | Fast | Low | Small tasks with detailed instructions |
| **Sonnet** | Medium | Medium | Smaller features, bugfixes (default) |
| **Opus** | Sometimes slower | High (up to 2x Sonnet) | New features, design-heavy work |

**Recommendations:**
- **Haiku**: Use when you can provide very specific, detailed instructions for small/simple changes
- **Sonnet**: Good balance for most development work - the default choice
- **Opus**: Recommended for new features, especially when using design reference images. Produces better code quality and more accurate design implementations

---

# Planning Mode

Bolt has two interaction modes accessible via the **Plan** button:

| Mode | Description |
|------|-------------|
| **Agent Mode** | Default mode - Bolt immediately implements changes |
| **Planning Mode** | Bolt explains proposed changes before implementing |

**When to use Planning Mode:**
- Complex features where you want to confirm the approach first
- When you're unsure if the AI understood your requirements correctly
- To avoid wasted tokens on unwanted features or misunderstood instructions
- When exploring different implementation options

**How it works:**
1. Click the **Plan** button to switch to Planning Mode
2. Describe what you want to build
3. Bolt will outline the proposed changes without implementing them
4. Review and confirm, or provide corrections
5. Once confirmed, Bolt implements the agreed-upon changes

This helps prevent misunderstandings and saves tokens by catching issues before code is written.

---

# General Prompting Tips

- **One feature at a time**: Keep prompts to max one new feature per prompt
- **Be technical when debugging**: When fixing bugs, provide more technical directions on how to fix if possible
- **Use checkpoints**: After each prompt, Bolt creates a checkpoint you can revert back to
- **Manual edits welcome**: You can also edit code manually and run commands in the terminal
- **Guide the AI**: If Bolt can't find the correct queries/models for a feature, tell it explicitly what to use

---

# Design & Styling

By default, Bolt apps may look "bland" because the AI by default only styles components via props from the generated theme (Atlas defaults unless changed).

**If you have a design, wireframe or concept available:**

- Generate your theme from Figma and override the defaults
- Provide Bolt with screenshots, mockups, or design references
- Tell it explicitly to match the image
- If allowed, you may tell it to use `style` overrides on the components to give it more freedom

Example prompt:

```
Here's an example image of the design I want. Implement this screen matching the design, including the color scheme shown in the image. You may use style overrides on UI components to achieve better accuracy
```

---

# First Prompt

Your first prompt should give an overview of the app and focus on authentication. See mode-specific guidance:
- [Supabase Mode - First Prompt](./1_supabase.md#first-prompt)
- [External API Mode - First Prompt](./2_external_api.md#first-prompt)

