# Project: Adventure Portfolio

## General Description

The project is a personal website that encapsulates all my visual activity, showcasing both professional photographs and casual adventure captures. The goal is for the site to organize and display images in two main categories:

1. **Professional Albums**:
   - Collection of edited and selected photos, grouped by specific moments and stored as static content in the Astro framework.
   - Each album includes descriptive text to personalize each moment.
   - I need image optimization to avoid overloading the page, as the photos tend to be large.

2. **Casual Adventures**:
   - Images captured with a phone, organized chronologically and presented in a **timeline** that allows visual navigation through adventures by date.
   - These photos have metadata (location, date, time) that facilitates their organization and will be extracted from Google Photos.
   - I need a dynamic layout so that the visual presentation is varied and attractive, not just a rectangular grid.

**Additional Functionality (long-term)**:
- An **Adventure Map** where I can visualize the locations of different photos, allowing the user to click on a pin to open an album or an adventure.

---

## Objectives

1. **Display visual content in a personalized environment**, organized and structured in categories that make it easy to explore.
2. **Optimize images** for fast loading without compromising visual quality.
3. **Keep the site lightweight** and easy to update to add or remove content without much effort.
4. **Present adventures in an intuitive scrolling timeline**, leveraging the metadata of the photos.
5. **Implement an interactive map system** where users can explore my adventures by location.

---

## Steps to Follow

### 1. Basic Project Setup in Astro
   - Initialize the project in Astro.
   - Create routes for the main sections:
     - **Home**
     - **Albums** (static content)
     - **Adventures** (dynamic timeline).
   - Configure the content directory to store professional photos.

### 2. Integration with Google Photos for Adventures
   - **Connect the Google Photos API** to extract photos with metadata.
   - Organize the photos by date and group them into “adventures” in the timeline section.
   - Create a timeline component so the user can scroll chronologically and see adventures by date.

### 3. Image Optimization
   - **Professional Photos**:
     - Compress and reduce the resolution of large images to avoid slowing down the site.
     - Implement `lazy loading` in Astro so images load according to the user's scroll.
   - **Photos from Google Photos**:
     - Use API options to request lower resolution versions.

### 4. Layout Design and Variation in the Photo Gallery
   - **Random Gallery Design**:
     - Create a more “free” or collage-type layout that varies sizes and positions to avoid a static design.
     - Explore “Masonry” layouts or use an adaptive CSS grid.
   - **Scroll Animation**:
     - Implement transition effects so adventures are progressively shown as you scroll.

### 5. Adventure Map (Advanced Functionality)
   - **Integration of an Interactive Map**:
     - Use Mapbox or Leaflet to create a map that marks adventure locations.
     - Configure the map so that clicking on a pin opens the corresponding album or adventure.

### 6. Add Custom Text and Story Details
   - **Writing Stories**:
     - In each album and adventure, add titles, descriptions, and other personalized details.
     - Texts for professional albums will be in `.md` files, while in adventures it could be integrated from metadata or a database.

### 7. Final Adjustments and Styling
   - Make final design adjustments to ensure the experience is visually appealing.
   - Implement responsive design to ensure it works on both mobile devices and desktops.

---

## Technical Requirements and Tools

- **Framework**: Astro, to facilitate static content management.
- **Authentication**: Set up authentication for the Google Photos API and ensure a data extraction flow.
- **Image Optimization**: Use tools like TinyPNG or a library in Astro.
- **Libraries for Layouts**: Masonry Layout, CSS Grid, or animation libraries like Framer Motion to create visual effects.
- **Map Integration**: Mapbox or Leaflet, to create the interactive map.
- **Markdown**: To store texts in professional albums.

---

## Implementation Priority

1. **Setup in Astro and basic routes**.
2. **Integration with Google Photos and timeline organization**.
3. **Image optimization** for optimal performance.
4. **Gallery design and varied layouts**.
5. **Adventure Map** (as a long-term extension).
6. **Content adjustments and responsive design**.

This file provides the overall vision, detailed steps, and resources needed to develop the project. Use each section as a guide to maintain focus and flow in building the website!

---

## Additional Notes

- **Privacy and Security**: Ensure that the data extraction process from Google Photos is secure and that no personal data is exposed.
- **User Experience**: Optimize the site for fast loading times and ensure a smooth user experience.
- **Long-term Maintenance**: Plan for regular updates and maintenance to keep the site up-to-date and secure.

---
