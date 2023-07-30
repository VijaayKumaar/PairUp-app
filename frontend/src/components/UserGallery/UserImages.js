import React from 'react';
import ImageGallery from './UsersGallery';

const images = [
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnijG1XgQ7jgnbUn9xaQYiDl4GxFUkl_Pib06s5f3BgDPZtqWvyRkqSUImFkpdqFm-rwU&usqp=CAU' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCx5W2FlEfTFyiRCy7oMqWUarDdfRsXFzIQ&usqp=CAUhttp://res.cloudinary.com/dc8spunry/image/upload/v1689869701/f9vwwouymcu74ij82nyl.jpg' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb6VH3IRbpgyFOy1adjV2aPXUHwnjOhCJyg&usqp=CAU' },
  { url: 'https://m.timesofindia.com/photo/78676909/78676909.jpg' },
  { url: 'https://w0.peakpx.com/wallpaper/472/830/HD-wallpaper-selena-gomez-actors-actress-beautiful-best-cute-hollywood-selena-gomez-thumbnail.jpg' },
  { url: 'https://i.pinimg.com/170x/cb/92/99/cb9299bc23678c22efd1b1b345ec646c.jpg' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/ketikasharma/ketikashapos1772023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/uppena_krithishetty/krithishettyposter120723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/malayalam/gallery/actress/manju_warrier/manjuposter070723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/kalyanipriyadarshan/kalyaniposter040723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/rashikhanna/rashikhapost6072023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/tamil/gallery/actress/iswaryamenon/iswaryamenonposter270623.jpg?w=200&dpr=1.3' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnijG1XgQ7jgnbUn9xaQYiDl4GxFUkl_Pib06s5f3BgDPZtqWvyRkqSUImFkpdqFm-rwU&usqp=CAU' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCx5W2FlEfTFyiRCy7oMqWUarDdfRsXFzIQ&usqp=CAUhttp://res.cloudinary.com/dc8spunry/image/upload/v1689869701/f9vwwouymcu74ij82nyl.jpg' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb6VH3IRbpgyFOy1adjV2aPXUHwnjOhCJyg&usqp=CAU' },
  { url: 'https://m.timesofindia.com/photo/78676909/78676909.jpg' },
  { url: 'https://w0.peakpx.com/wallpaper/472/830/HD-wallpaper-selena-gomez-actors-actress-beautiful-best-cute-hollywood-selena-gomez-thumbnail.jpg' },
  { url: 'https://i.pinimg.com/170x/cb/92/99/cb9299bc23678c22efd1b1b345ec646c.jpg' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/ketikasharma/ketikashapos1772023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/uppena_krithishetty/krithishettyposter120723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/malayalam/gallery/actress/manju_warrier/manjuposter070723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/kalyanipriyadarshan/kalyaniposter040723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/rashikhanna/rashikhapost6072023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/tamil/gallery/actress/iswaryamenon/iswaryamenonposter270623.jpg?w=200&dpr=1.3' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb6VH3IRbpgyFOy1adjV2aPXUHwnjOhCJyg&usqp=CAU' },
  { url: 'https://m.timesofindia.com/photo/78676909/78676909.jpg' },
  { url: 'https://w0.peakpx.com/wallpaper/472/830/HD-wallpaper-selena-gomez-actors-actress-beautiful-best-cute-hollywood-selena-gomez-thumbnail.jpg' },
  { url: 'https://i.pinimg.com/170x/cb/92/99/cb9299bc23678c22efd1b1b345ec646c.jpg' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/ketikasharma/ketikashapos1772023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/uppena_krithishetty/krithishettyposter120723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/malayalam/gallery/actress/manju_warrier/manjuposter070723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/kalyanipriyadarshan/kalyaniposter040723.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/telugu/gallery/actress/rashikhanna/rashikhapost6072023.jpg?w=200&dpr=1.3' },
  { url: 'https://igimages.gumlet.io/tamil/gallery/actress/iswaryamenon/iswaryamenonposter270623.jpg?w=200&dpr=1.3' },


  // Add more images to the array
];

const MainComponent = () => {
  return (
    <div>
      {/* Other content */}
      <ImageGallery images={images} />
      {/* More content */}
    </div>
  );
};

export default MainComponent;
