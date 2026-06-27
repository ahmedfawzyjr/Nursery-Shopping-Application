# Paradise Nursery Shopping Application

Paradise Nursery is a beautiful, modern, and highly interactive online plant shop. This application enables users to browse a diverse collection of plants categorized by their benefits (Air Purifying, Aromatic, and Insect Repellent), learn about the company's background, and manage a shopping cart dynamically.

## Key Features

1. **Elegant Landing Page**: Welcomes users with high-quality visual representation, background imagery, a detailed "About Us" section, and a "Get Started" button to jump straight into shopping.
2. **Product Catalog**: Displays 18 unique plants organized into 3 key categories. Each plant card includes:
   - High-quality plant images
   - Name and description
   - Unit price
   - "Add to Cart" button (disables dynamically when the item is in the cart)
3. **Interactive Shopping Cart**: Displays all selected plants, their quantities, individual subtotals, and total order value.
   - Increment and decrement item quantities with instant recalculations.
   - Delete items directly.
   - Checkout flow showing a "Coming Soon" prompt.
   - "Continue Shopping" button to seamlessly return to browsing.
4. **State Management**: Built using Redux Toolkit to provide predictable, central management of the shopping cart state.
5. **Responsive Design**: Designed with modern CSS for a premium, responsive experience across mobile, tablet, and desktop viewports.

## Running the Application

To install dependencies and run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
