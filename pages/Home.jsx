import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Carouselimg1 from "../photos/cat-images/test.jpeg";
import Carouselimg2 from "../photos/cat-images/cat1.jpeg";
import Carouselimg3 from "../photos/cat-images/cat2.jpeg";
import Carouselimg4 from "../photos/cat-images/cat3.png";

const images = [
  {
    original: Carouselimg1,
    originalHeight: '700px',
    
  },
  {
    original: Carouselimg2,
    originalHeight: '700px',
 
  },
  {
    original: Carouselimg3,
    originalHeight: '700px',
  },
  {
    original: Carouselimg4,
    originalHeight: '700px',
  },
];

const Home = () => {
  const customStyles = {
    sizes: {
      width: '100%',
    },
  };

  return (
    <div>
      <Gallery
        items={images}
        autoPlay={true}
        showBullets={false}
        infinite={true}
        slideInterval={3000}
        showNav={true}
        showPlayButton={false}
        styles={customStyles}
      />
      <div className='homeContainer'>
      <div className="card">
        <h1>Adoption is forever</h1>
        <p>
When you decide to bring a furry friend from Paws For Compassion into your life, we want to make sure you're all in and ready for the adventure together, no matter where life takes you next. Moving your pet to a new place might have some costs involved, but don't worry – we've got connections to make the process smoother and get your pet ready for the journey. If this sounds like your kind of deal, let's set up a time to hang out with our adorable rescues and kick off the adoption journey when you find the perfect match. Check out the awesome animals looking for a home below!</p>
        </div> 

<div className='cardContainer'>
<div class="card2" id="card2">
  <div class="content">
    <div className='header'>
    <h3>You are saving a life.</h3>
    <p>
    By adopting, you are providing an animal with the second chance they deserve. Many have been rescued from horrific circumstances such as cruelty, neglect and abandonment. Shelter staff work tirelessly to nurse animals back to health, rehabilitate disturbed animals and do everything they possibly can to ensure they are prepared to go to a new home. Sadly, not all of them are as fortunate. By rehoming a pet, you can give an animal that has been abandoned (through no fault of their own) a loving and stable home..</p></div>
</div>
</div>
<div class="card2" id="card2">
  <div class="content">
    <div className='header'>
    <h3>Save money</h3>
    <p>
Shelters often microchip, spay, neuter and vaccinate the animals that come into their care. This saves you a lot of money because you don’t have to pay for the procedures yourself and it ensures the pet you are taking home is healthy. Also, the prices of adopting a pet from a shelter are often a lot lower than the rates charged by breeders.</p></div>
</div>
</div>
<div class="card2" id="card2">
  <div class="content">
    <div className='header'>
    <h3>Help to eradicate kitten farms and pet shops.</h3>
    <p>

    Help to eradicate kitten farms and pet shops.

    Help end kitten farms and pet shop exploitation. A kitten farm, an illegal breeding practice solely for profit, disregards cat welfare. Cats are forced to breed, face poor conditions, lack veterinary care, and are often euthanized after breeding. Cats in pet shops may come from such farms. Choose shelter adoption to combat this cruelty, supporting reputable sources that prioritize animal welfare over profit.</p></div>
</div>
</div>
<div class="card2" id="card2">
  <div class="content">
    <div className='header'>
    <h3>Benefit children</h3>
    <p>
    Children can be taught valuable life skills through pet ownership, such as the importance of maintaining responsibilities. Rehoming a pet will also encourage empathy by making them think about how they have helped to give an unwanted animal a loving home. Pets can help children with separation anxiety and provide them with security, as they can be safe in the knowledge that someone will always be there. As well as this, they can be a loving companion and playmate.
</p></div>
</div>
</div>
</div>
</div>
      <Footer />
    </div>

  );
};

export default Home;
