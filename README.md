# Elite Cuts - Hair Salon Website

A modern, responsive website for a local haircut salon featuring a photo gallery, services showcase, booking form, and more.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Photo Gallery**: Extensive gallery with 30+ images and lightbox functionality
- **Services Showcase**: Display of all salon services with pricing
- **Booking Form**: Contact/appointment request form with validation
- **Smooth Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Modern UI**: Clean, professional design with smooth animations

## Project Structure

```
haircut-salon/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
├── images/         # Directory for salon photos
└── README.md       # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required - it's a static website!

## Customization

### Adding Your Own Images

Replace the placeholder images in `script.js` by updating the `galleryImages` array with your own image URLs or paths:

```javascript
const galleryImages = [
    { src: 'images/your-image-1.jpg', alt: 'Description' },
    { src: 'images/your-image-2.jpg', alt: 'Description' },
    // ... add more images
];
```

### Updating Content

- **Salon Name**: Update "Elite Cuts" throughout `index.html`
- **Contact Information**: Update phone, email, and address in the Hours & Location section and footer
- **Services & Pricing**: Modify the services grid in `index.html`
- **Business Hours**: Update the hours list in the Hours section
- **Colors**: Customize CSS variables in `styles.css` (root section)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

## License

This project is open source and available for personal and commercial use.

