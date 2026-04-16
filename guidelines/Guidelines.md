# General Guidelines
* Use responsive layouts based on Flexbox or Grid. Avoid absolute positioning except for overlays such as tooltips, modals, floating badges, or notifications.
* Follow a mobile-first layout approach. Layouts should scale properly across mobile, tablet, and desktop screens.
* Keep UI components modular and reusable. Split complex UI into smaller components such as cards, headers, filters, tables, and panels.
* Maintain consistent alignment and spacing using an 8pt spacing system.
* Follow WCAG AA accessibility standards.
* Ensure all interactive elements have clear `:hover` and `:focus-visible` states.
* Do not rely on color alone to communicate meaning or state changes.
* Interactive elements should have a minimum height of `44px` for accessibility.
* Always provide clear error messages and validation feedback in forms.
* Whenever a list, table, or section contains no data, generate an empty state component with a short message and call-to-action.

# Design System Guidelines
* **Typography:** Base font size should be `14px`. Body text line height should be `1.5`, and heading line height should be `1.2`. Keep text concise and scannable.
* **Spacing:** Follow an 8pt spacing grid (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`).
* **Border Radius:** Use `8px` border radius for buttons and inputs. Use `16px` border radius for cards, panels, and modals.
* **Dates:** Event dates must always follow this format: Day, MMM DD, YYYY (example: Fri, Oct 24, 2026). If applicable, display event time directly below the date.
* **Forms:** Avoid placeholder-only inputs; all inputs must have labels.

## Button
The Button component represents the main interactive element used for actions such as submitting forms, sending files, confirming actions, or navigating workflows.

### Usage
Buttons should represent clear actions users can perform. Each screen or modal should only contain one primary button to guide users toward the most important action.
* Buttons should be `100%` width on mobile screens under 768px.
* Buttons should hug their content on desktop.
* Labels must be short and action-oriented.

### Variants
* **Primary Button**
  * **Purpose:** Main action of the page or workflow.
  * **Visual Style:** Solid background using the primary brand color with high contrast text and bold font weight.
  * **Usage:** Only one primary button per screen or modal.
* **Secondary Button**
  * **Purpose:** Supporting or alternative actions.
  * **Visual Style:** Transparent background with a 1–2px border using the primary color.
  * **Usage:** Can appear alongside a primary button.
* **Tertiary Button**
  * **Purpose:** Low priority actions.
  * **Visual Style:** Text-only with no border.
  * **Usage:** Must display an underline on hover.
* **Disabled Button**
  * **Purpose:** Indicates an action cannot currently be taken.
  * **Visual Style:** Background `#E0E0E0` with muted text `#9E9E9E`.
  * **Usage:** Cursor must be set to `not-allowed`.

## Card
Cards are used to display structured content such as events or items.

### Structure
Cards should contain the following sections:
* **Media:** Top image container with a 16:9 aspect ratio. Image must use `object-fit: cover`.
* **Content:** Event Title (H3), Date and time, Location, and Starting price.
* **Actions:** Place action buttons aligned to the bottom-right of the card.

### Interaction
Cards should provide clear visual feedback when hovered.
* **Hover State:** Increase drop shadow and move the card `-4px` on the Y-axis.

## Forms and Inputs
Inputs are used for user data entry and workflow completion.

### Usage
* Labels must always be positioned above the input field and be left-aligned.
* Placeholder text should not replace labels.
* Inputs should have clear visual states.

### Input States
Inputs must support the following states: Default, Hover, Focus, Disabled, and Error.

### Validation
When validation fails:
* Display an inline error message below the input field.
* Change the input border color to red.
* Error messages should clearly explain the issue.