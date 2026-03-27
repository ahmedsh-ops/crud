# CRUD Project

A modern front-end application for managing products using HTML, CSS, JavaScript.

## Features

- **Create**: Add new products with name, price, and category.
- **Read**: View all products in a table.
- **Update**: Edit existing product details.
- **Delete**: Remove products from the list.
- **Search**: Filter products by name.
- **Pagination**: Navigate through large datasets.
- **Validation**: Real-time form validation.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router (optional, not currently implemented)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd crud
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── ProductForm.jsx       # Form for creating/editing products
│   ├── ProductTable.jsx      # Table to display products
│   ├── SearchBar.jsx         # Search functionality
│   ├── Pagination.jsx        # Pagination controls
│   ├── Modal.jsx             # Modal dialogs
│   └── ...
├── hooks/
│   ├── useProducts.js        # Custom hook for product logic
│   └── ...
├── services/
│   ├── productService.js     # API service (mocked for now)
│   └── ...
├── App.jsx                   # Main application component
├── index.css                 # Tailwind CSS configuration
└── main.jsx                  # Entry point
```

## Development

### Adding a New Product

1. Fill in the form with product details.
2. Click "Add Product".
3. The product will appear in the table.

### Editing a Product

1. Click the "Edit" button on a product row.
2. Modify the details in the form.
3. Click "Update Product".

### Deleting a Product

1. Click the "Delete" button on a product row.
2. Confirm the deletion in the modal.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
