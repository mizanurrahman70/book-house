# Book House

Welcome to **Book House**, your go-to platform for exploring, organizing, and discovering amazing books! This project was designed to provide an intuitive and visually appealing experience for book lovers.

## 🌐 Live Site
Visit the live site here: [Book House](https://book-house70.netlify.app/)

## 📖 Overview
Book House is a feature-rich web application where users can:
- Explore a collection of books presented in an engaging card layout.
- Add books to their "Read" or "Wishlist" sections with intuitive buttons.
- View detailed information about each book in a dedicated page.
- Visualize reading progress using a custom shape bar chart.

This project was built with a strong focus on following the Figma design, ensuring responsiveness, and creating a seamless user experience.

## 🚀 Features
### Core Features
1. **Navbar**:
   - Includes the website name/logo and menu items: Home, Listed Books, and Pages to Read.
   - Contains Sign In and Sign Up buttons (non-functional for this version).
   - Active route highlighting for easy navigation.

2. **Banner Section**:
   - Displays a title and a "View The List" button that navigates to the Listed Books page.
   - Features an eye-catching image related to books.

3. **Books Section**:
   - Showcases books in a grid layout (3 cards per row) with details like author, category, tags, and rating.

4. **Dynamic Book Details Page**:
   - Provides an in-depth view of the selected book with information such as publisher, year of publishing, and review.
   - Includes "Read" and "Wishlist" buttons with toast notifications for actions.

5. **Listed Books Page**:
   - Displays books added to the "Read" or "Wishlist" categories.
   - Implements sorting by Rating, Number of Pages, or Published Year.
   - Uses tabs to switch between "Read" and "Wishlist" sections.

6. **Pages to Read Page**:
   - Features a custom shape bar chart visualizing the total pages of read-listed books.

7. **404 Page**:
   - A custom-designed route for handling invalid URLs.

### Bonus Features
- **Local Storage Integration**:
   - Saves "Read" and "Wishlist" data persistently.
   - Prevents duplicate entries and ensures cross-category exclusivity.

- **Sorting and Filtering**:
   - Functional dropdown for sorting books in descending order.

- **Responsiveness**:
   - Optimized for desktop and mobile devices.

## 📊 JSON Data Structure
The website uses a JSON file containing book data with the following fields:
- `bookId`: Unique identifier
- `bookName`: Title of the book
- `author`: Author's name
- `image`: Cover image URL
- `review`: Brief review (non-lorem text)
- `totalPages`: Number of pages
- `rating`: Book rating
- `category`: Book genre
- `tags`: Array of tags (e.g., ["Suspense", "Adventure"])
- `publisher`: Publishing house
- `yearOfPublishing`: Year of publication

## 🛠 Technologies Used
- **Frontend**: React
- **Styling**: CSS/SCSS
- **Data**: JSON
- **Alerts**: Toastify/Sweet Alert
- **Version Control**: GitHub

## 📅 Development Highlights
- Followed Figma design guidelines for a professional layout.
- Ensured 10+ meaningful GitHub commits throughout the project lifecycle.
- Focused on user-friendly and accessible design principles.
- Added creative touches like toast notifications and a custom chart.

## 📱 Responsive Design
- Desktop: Full-featured layout and interactions.
- Mobile: Optimized layout for seamless navigation and readability.

## 💡 Additional Routes
- Two additional routes were added to enhance user experience with meaningful content.

## 🏆 Challenges Addressed
1. Created a functional dropdown for sorting books.
2. Implemented custom bar charts for visual representation.
3. Managed dynamic routing and local storage efficiently.

---

Thank you for exploring **Book House**! Happy reading! 📚




