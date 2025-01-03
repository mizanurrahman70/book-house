Book House 📚
Welcome to Book House, a dynamic and user-friendly platform for book lovers! Discover books, track your reading list, and explore more with an interactive experience.

🌐 Live Site
Book House - Explore Now

🚀 Features
Interactive Navbar: Includes Home, Listed Books, and Pages to Read sections, with Sign In and Sign Up buttons for future authentication features.
Dynamic JSON Data: Books are loaded from a JSON file containing detailed metadata, including tags, categories, authors, and ratings.
Responsive Book Cards: Displays books in an eye-catching grid layout with details like author, category, and tags.
Dynamic Routing: Clicking on a book redirects to its detail page with an in-depth view of the book's information.
Smart Buttons: Add books to the "Read" list or "Wishlist" with toast notifications and local storage management.
Sorting & Tabs: Sort books by Rating, Total Pages, or Published Year. Tabs separate "Read" books and Wishlist items.
Custom Shape Bar Chart: Visualize "Pages to Read" with a custom bar chart displaying total pages against book names.
Error Handling: A custom 404 Page for invalid routes ensures smooth navigation.
Additional Routes: Includes two extra routes with meaningful content for a richer user experience.
📂 Project Structure
JSON Data Format
Each book entry includes:

bookId: Unique identifier
bookName: Title of the book
author: Author's name
image: Cover image
review: Brief review
totalPages: Total pages in the book
rating: User rating
category: Genre or type
tags: Tags in an array format
publisher: Publishing house
yearOfPublishing: Year the book was published
Key Pages
Home Page:
A banner with a title, button linking to Listed Books, and an image.
Listed Books:
Displays books added to the Read list or Wishlist with sorting functionality.
Separate tabs for Read and Wishlist items.
Book Details:
Comprehensive details of the selected book with "Read" and "Wishlist" buttons.
Pages to Read:
A custom bar chart visualizing total pages of read-listed books.
404 Page:
A friendly error message for invalid routes.
🔧 Challenges Implemented
Toast Notifications: Alerts for button actions, avoiding duplicate entries in Read and Wishlist.
Local Storage Management: Efficiently saves and retrieves book data from the browser's local storage.
Responsive Design: Optimized for desktop and mobile devices for a seamless browsing experience.
Sorting: Functional dropdown to sort books dynamically.
Custom Bar Chart: Displays "Pages to Read" with an innovative design.
📊 Tools & Technologies
Frameworks: React
Styling: CSS/SCSS, Figma Design Guidelines
Data: JSON
Utilities: Toastify/Sweet Alert for notifications
Version Control: GitHub with 10+ meaningful commits
Charting: Custom Shape Bar Chart
📱 Responsive Design
The website is optimized for:

Desktop: Full-featured layouts and interactions
Mobile: Intuitive design with readable and organized layouts
Tablet: Optional adjustments for a clean experience



