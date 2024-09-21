// src/components/Blog.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Blog.css';

Modal.setAppElement('#root'); // Set the app root for accessibility

function Blog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const characters = {
    Naruto: {
      name: 'Naruto Uzumaki',
      story: 'Naruto Uzumaki is the central protagonist of Naruto, one of the most iconic and beloved characters in anime and manga history. Born in the Hidden Leaf Village (Konohagakure), Narutos life began under tragic circumstances. As a newborn, he became the host for the fearsome Nine-Tails (Kurama), a powerful fox demon that had attacked the village, causing widespread devastation. To save the village, the Fourth Hokage, Minato Namikaze—who was also Naruto’s father—sealed the Nine-Tails inside Naruto, but in doing so, he and his wife, Kushina, lost their lives, leaving Naruto an orphan. Growing up, Naruto was shunned and ostracized by the villagers who feared and resented the demon fox sealed within him. This led to a lonely childhood filled with feelings of isolation and anger. However, Naruto responded to this treatment in his own unique way—through pranks and mischief. His desire to be noticed stemmed from his longing for recognition and acceptance. Despite being considered a troublemaker and underachiever by many, Naruto had a single, unwavering dream: to become the Hokage, the strongest ninja and leader of the village, so that everyone would finally acknowledge him.',
      image: 'https://i.ytimg.com/vi/fDNc8G3RAbQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM2y3K-lnn3JVYoMd8jPo-fY3CHA',
    },
    Goku: {
      name: 'Son Goku',
      story: ["Son Goku, the iconic protagonist of Dragon Ball, is a Saiyan warrior known for his boundless strength, pure heart, and unrelenting desire to become the strongest fighter in the universe.",
        "Born on Planet Vegeta as Kakarot, Goku was sent to Earth as a baby with the mission to conquer the planet.", " However, after a head injury erased his violent Saiyan instincts, he grew up with a kind and innocent nature under the care of Grandpa Gohan. Raised in the wilderness, Goku early life was shaped by a deep sense of curiosity, wonder, and an inherent love for martial arts. His simple, good-hearted personality made him a beloved figure to his friends and an eternal rival to those who sought power. ", "Goku journey as a fighter began when he met Bulma, sparking his quest for the seven Dragon Balls, magical orbs that grant any wish when gathered together. ",
        "This adventure introduced him to a wide array of characters, many of whom would become lifelong friends and allies, including Krillin, Master Roshi, and Yamcha. Under the tutelage of Master Roshi, Goku trained in the martial arts and learned the famous Kamehameha, a powerful energy attack that would become his signature move. As Goku grew stronger, he participated in multiple World Martial Arts Tournaments, where his fighting prowess was tested against the best fighters in the world, including his future best friend and rival, Vegeta."],
      image: 'https://c4.wallpaperflare.com/wallpaper/495/331/819/dragon-ball-super-dragon-ball-son-goku-ultra-instict-wallpaper-thumb.jpg',
    },
    Monkey: {
      name: 'Monkey D Luffy',
      story: 'Monkey D. Luffy, the protagonist of One Piece, is a carefree yet fiercely determined pirate with a singular goal: to find the legendary treasure known as the One Piece and become the Pirate King. Luffy’s journey begins in Foosha Village, where, as a young boy, he idolizes Red-Haired Shanks, a pirate who becomes his role model. Inspired by Shanks and driven by his adventurous spirit, Luffy sets out to sea, despite the challenges awaiting him. A critical turning point in his life occurs when he accidentally consumes the Gomu Gomu no Mi, a Devil Fruit that grants him the ability to stretch his body like rubber but robs him of the ability to swim—an ironic curse for a pirate. This power, combined with his insatiable appetite for adventure and his unwavering belief in freedom, defines Luffy journey as he seeks out loyal crew members and faces off against formidable foes. Luffy’s strength lies not only in his rubbery abilities but also in his unwavering spirit and the deep bonds he forms with his crew, known as the Straw Hat Pirates. He recruits powerful individuals such as Roronoa Zoro, Nami, Usopp, Sanji, and others, each with their own dreams and unique talents. Luffy’s leadership is marked by his respect for individuality and his deep loyalty to his friends, often putting his own life on the line to protect them. His carefree attitude, love for adventure, and endless optimism may make him seem simple-minded at times, but his strategic brilliance and sheer determination come to the forefront during battles, where his adaptability and refusal to give up turn even the direst situations in his favor. His constant growth as a pirate is evident as he learns to harness his Devil Fruit powers in new ways, developing techniques like Gear Second and Gear Fourth, which amplify his physical capabilities to extraordinary levels.',
      image: 'https://editors.dexerto.com/wp-content/uploads/2023/08/13/one-piece-gear-5.jpeg',
    },
    Ichigo: {
      name: 'Ichigo Kurosaki',
      story: 'chigo Kurosaki, the protagonist of Bleach, is a high school student with the extraordinary ability to see ghosts—a gift that sets him apart from the start. His life changes dramatically when he meets Rukia Kuchiki, a Soul Reaper (Shinigami) tasked with defending the living world from evil spirits known as Hollows. In a desperate moment, Rukia transfers her Soul Reaper powers to Ichigo, allowing him to take on the role of a substitute Soul Reaper. With his newfound abilities, Ichigo is thrust into a hidden world of spirits, Hollows, and the Soul Society, an afterlife realm governed by Soul Reapers. Though initially reluctant, Ichigo embraces his duty to protect both the living and the spirit worlds, embarking on a journey filled with intense battles and personal growth. Ichigos character is defined by his fierce loyalty and unshakable sense of responsibility to protect those around him, especially his family and friends. This driving force propels him into numerous battles against powerful enemies, from monstrous Hollows to rogue Soul Reapers and even the sinister Arrancars, beings who have fused Hollow and Soul Reaper powers. Over time, Ichigos abilities evolve, and he learns to control his Zanpakuto, the sword that channels his spiritual energy, allowing him to unleash devastating techniques such as Getsuga Tensho. His strength is further amplified when he attains Bankai, the final and most powerful form of his Zanpakuto, granting him incredible speed and power. Throughout his battles, Ichigo’s determination is unyielding, even as he faces enemies far stronger than himself.',
      image: 'https://staticg.sportskeeda.com/editor/2023/01/f7a02-16747865278928-1920.jpg',
    },
    // Add more characters here if necessary
  };

  const openModal = (character) => {
    setCurrentCharacter(characters[character]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCharacter(null);
  };

  return (
    <div className="blog-container">
      <h2>Anime Characters and Their Stories</h2>

      <div className="blog-post" onClick={() => openModal('Naruto')}>
        <img
          src="https://images5.alphacoders.com/940/940794.png" /* Replace with actual image URL */
          alt="Naruto"
          className="anime-image"
        />
        <div className="blog-content">
          <h3>Naruto Uzumaki</h3>
          <p>Naruto Uzumaki is a young ninja with a dream to become Hokage...</p>
        </div>
      </div>

      <div className="blog-post" onClick={() => openModal('Goku')}>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/359/435/desktop-wallpaper-goku-god-hair-transparent-png-clipart-white-hair-goku-thumbnail.jpg" /* Replace with actual image URL */
          alt="Goku"
          className="anime-image"
        />
        <div className="blog-content">
          <h3>Son Goku</h3>
          <p>Son Goku is a Saiyan from the Dragon Ball series...</p>
        </div>
      </div>
      <div className="blog-post" onClick={() => openModal('Monkey')}>
        <img
          src="https://images2.alphacoders.com/116/1167805.png" /* Replace with actual image URL */
          alt="Goku"
          className="anime-image"
        />
        <div className="blog-content">
          <h3>Monkey D Luffy</h3>
          <p>Monkey D. Luffy is a bold, rubber-bodied adventurer driven by an unshakable dream: to uncover the legendary One Piece and claim the title of Pirate King..</p>
        </div>
      </div>
      <div className="blog-post" onClick={() => openModal('Ichigo')}>
        <img
          src="https://i.pinimg.com/736x/7f/a7/35/7fa735880ed01d762306539f09998c79.jpg" /* Replace with actual image URL */
          alt="Goku"
          className="anime-image"
        />
        <div className="blog-content">
          <h3>Ichigo kurosaki</h3>
          <p>Ichigo Kurosaki is a fearless teenager with the power of a Soul Reaper, fighting to protect both the living and spirit worlds while discovering the true depths of his unique abilities..</p>
        </div>
      </div>


      {/* Modal for showing character details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Character Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {currentCharacter && (
          <div className="modal-body">
            <h2>{currentCharacter.name}</h2>
            <img src={currentCharacter.image} alt={currentCharacter.name} className="modal-image" />
            <div className="story-content">
              {currentCharacter.story.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <button className="modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        )}

      </Modal>
    </div>
  );
}

export default Blog;

