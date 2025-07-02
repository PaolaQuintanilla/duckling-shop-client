## Duckling Shop Client - React

### Stack

- **React**
- **Tailwind CSS**
- **Axios**
- **Formik**
- **React Router v6**
- **Feature Folder Architecture**
- **Jest + React Testing Library**

### Patterns Design

- **Custom Hook Pattern**
- **Separation of Concerns**
- **Single Responsibility Principle**
- **Page Component**

### 🛠 Tech Stack

| Library / Tool      | Version | Purpose                           |
| ------------------- | ------- | --------------------------------- |
| **React**           | ^19.1.0 | Core UI library                   |
| **React Router**    | ^7.6.2  | Client-side routing               |
| **Tailwind CSS**    | ^4.1.10 | Utility-first CSS framework       |
| **Formik**          | ^2.4.6  | Form state management             |
| **Yup**             | ^1.6.1  | Schema validation for forms       |
| **Axios**           | ^1.10.0 | HTTP client for API requests      |
| **Vite**            | ^6.3.5  | Fast development and build tool   |
| **Jest**            | ^30.0.3 | Testing framework                 |
| **Testing Library** | ^16.3.0 | React component testing utilities |

### 🔍 Scripts

- `npm install` - Install dependencies.
- `npm run dev` – Start development server with hot-reload.
- `npm run test` – Run unit tests.

**URL:**
http://localhost:5173/

### Duck Management Page Flow

This document will guide you through the flow of interacting with the "Ducks" page in the application. The Ducks page allows you to view, create, edit, and delete ducks.

---

#### 1. Viewing the List of Ducks

- Upon visiting the **Ducks Page**, you'll be presented with a list of all ducks in the system. This list displays essential information about each duck such as **color**, **size**, **quantity**, and **price**.

---

#### 2. Creating a Duck

To add a new duck to the list:

1. **Navigate to the Duck List Page**:

   - You should already be on the "Ducks" page with the list displayed.

2. **Click the "Add Duck" Button**:

   - There is a button labeled **"Add Duck"** either located at the top.
   - Click this button to open the "Create Duck" form.

3. **Fill in the Duck Information**:

   - In the form, provide the following details:
     - **Color**: Select the color of the duck (e.g., Red, Green, etc.).
     - **Size**: Choose the size of the duck (e.g., Small, Medium, Large).
     - **Quantity**: Enter the number of ducks available.
     - **Price**: Set the price for each duck.

4. **Submit the Form**:
   - Once the form is filled out, press the **Submit** button to add the new duck to the list.
   - The new duck will appear in the list after successful creation.

---

#### 3. Editing a Duck

To edit a duck's details:

1. **Navigate to the Duck List Page**:

   - As before, ensure you are on the "Ducks" page with the list of ducks.

2. **Click the "Edit" Button**:

   - Each row in the list will have an **Edit** button (located on the right side of the row in the "Actions" section).
   - Click the **Edit** button next to the duck you want to modify.

3. **Make Changes to the Duck Information**:

   - A form will be pre-filled with the existing duck's data.
   - Modify the fields such as **Quantity**, or **Price** as necessary.

4. **Submit the Changes**:
   - After making the required changes, click the **Update** button.
   - The updated duck information will be saved, and the list will reflect the changes.

---

## 4. Deleting a Duck

To remove a duck from the system:

1. **Navigate to the Duck List Page**:

   - Again, you should be on the "Ducks" page with the full list displayed.

2. **Click the "Delete" Button**:

   - Each duck in the list will have a **Delete** button under the "Actions" section on the right side.
   - Click the **Delete** button next to the duck you want to remove.

3. **Confirm the Deletion**:

   - A confirmation dialog will appear asking if you are sure you want to delete the duck.
   - Confirm by clicking **Confirm**, or cancel the action if you change your mind.

4. **Duck is Removed**:
   - Once confirmed, the duck will be removed from the list and soft deleted from the database.

---

Happy Duck Managing! 🦆🎉
