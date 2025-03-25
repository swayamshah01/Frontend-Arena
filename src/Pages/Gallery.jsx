import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon, 
  Info, 
  X, 
  BookOpen, 
  Award, 
  Calendar 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Import artwork images
import monaLisaImg from "../Gallery/monalisa.png";
import weddingImg from "../Gallery/THE_WEDDING.png";
import welaImg from "../Gallery/welamarenew.png";
import florenceImg from "../Gallery/florence.png";
import bedroomImg from "../Gallery/bedroom.png";
import nightWatchImg from "../Gallery/night.png";

// Import author portrait images 
import daVinciPortrait from "../Gallery/da_vinci_portrait.png";
import veronesePortrait from "../Gallery/veronese_portrait.png";
import leutzePortrait from "../Gallery/leutze_portrait.png";
import botticelliPortrait from "../Gallery/botticelli_portrait.png";
import vanGoghPortrait from "../Gallery/van_gogh_portrait.png";
import rembrandtPortrait from "../Gallery/rembrandt_portrait.png";

// Global Styles (add to your global CSS)
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");

const galleryData = [
  {
    place: 'Paris, Louvre Museum',
    title: 'MONA',
    title2: 'LISA',
    description: 'A mesmerizing portrait that has captivated the world for centuries, the Mona Lisa transcends traditional portraiture. Leonardo da Vincis masterpiece revolutionized art through its innovative sfumato technique, creating an ethereal quality where light and shadow blend seamlessly. The subjects enigmatic smile seems to shift with each glance, embodying a psychological depth that was revolutionary for its time.',
    image: monaLisaImg,
    artist: 'Leonardo da Vinci',
    year: 1503,
    authorPortrait: daVinciPortrait,
    authorBio: 'A polymath of the Renaissance, Leonardo da Vinci epitomized the "Renaissance Man" – an inventor, scientist, engineer, and artist whose curiosity knew no bounds. Born in Vinci, Italy, he created groundbreaking works that merged scientific precision with artistic innovation, exploring anatomy, engineering, and the mysteries of human perception.',
    keyWorks: ['The Last Supper', 'Vitruvian Man', 'The Virgin of the Rocks'],
    birthDeath: '1452-1519',
    fullBiography: `Leonardo da Vinci was an Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, paleontology, and cartography. He is widely considered one of the most diversely talented individuals ever to have lived. 

    A master of both technical skill and creative imagination, da Vinci's notebooks reveal an mind centuries ahead of his time. His anatomical studies were unprecedented in their accuracy, his engineering designs anticipated technologies like helicopters and tanks, and his artistic techniques revolutionized painting forever.

    Despite producing relatively few paintings, his work has become iconic. The Mona Lisa, with its revolutionary techniques of sfumato and atmospheric perspective, remains the most famous painting in the world. His preparatory sketches and scientific drawings demonstrate an unparalleled observational skill and understanding of the natural world.`
  },
  {
    place: 'Louvre, Paris - France',
    title: 'THE WEDDING',
    title2: 'AT CANA',
    description: 'A monumental canvas that redefines Renaissance narrative painting, Veroneses masterpiece transforms a biblical moment into a spectacular social tableau. Spanning nearly 10 meters, the painting is a visual feast of over 130 intricately detailed figures, blending religious narrative with the opulent aesthetics of 16th-century Venetian society.',
    image: weddingImg,
    artist: 'Paolo Veronese',
    year: 1563,
    authorPortrait: veronesePortrait,
    authorBio: 'A leading figure of the Venetian Renaissance, Paolo Veronese was renowned for his expansive, dramatically composed paintings that celebrated color, light, and human complexity. His works often blurred the lines between religious narrative and contemporary social commentary.',
    keyWorks: ['Feast in the House of Levi', 'The Martyrdom of St. Sebastian', 'Perseus and Andromeda'],
    birthDeath: '1528-1588',
    fullBiography: `Paolo Veronese was a prominent Renaissance painter of the Venetian school, known for his large history paintings of religious and mythological subjects. His distinctive style was characterized by sumptuous, crowded canvases filled with complex compositions and vibrant colors.

    Working primarily in Venice, Veronese became famous for his ability to transform traditional religious scenes into grand, almost theatrical spectacles that reflected the social and cultural life of 16th-century Venice. His paintings often included contemporary dress and architectural elements, bringing biblical narratives into a familiar contemporary context.

    The Wedding at Cana, his most famous work, is a testament to his extraordinary skill in creating complex, multi-figured compositions that are both narratively rich and visually stunning. The painting depicts the biblical miracle where Jesus turns water into wine, but Veronese populates the scene with contemporary Venetian nobles, musicians, and servants.`
  },
  {
    place: 'Metropolitan Museum of Art, New York - USA',
    title: 'Washington Crossing',
    title2: 'the Delaware',
    description: 'An iconic representation of American revolutionary spirit, this painting dramatically captures a pivotal moment in the American War of Independence. Emanuel Leutzes work portrays George Washington standing heroically at the bow of a boat, leading his troops across the icy Delaware River on a strategically crucial Christmas night in 1776.',
    image: welaImg,
    artist: 'Emanuel Leutze',
    year: 1851,
    authorPortrait: leutzePortrait,
    authorBio: 'A German-American history painter best known for his romanticized depictions of pivotal moments in American history, Leutze was a master of narrative painting that celebrated national heroism and idealism.',
    keyWorks: ['Washington Crossing the Delaware', 'Westward the Course of Empire Takes Its Way'],
    birthDeath: '1816-1868',
    fullBiography: `Emanuel Leutze was a German-born American history painter who became famous for his idealized and heroic representations of American historical events. Though born in Germany, he spent much of his artistic career in the United States, deeply committed to capturing the spirit of American democracy and heroism.

    His most famous work, Washington Crossing the Delaware, is less a historically accurate depiction and more a powerful mythological representation of American revolutionary spirit. The painting dramatizes a crucial moment in the American Revolutionary War, presenting Washington as a larger-than-life hero leading his troops through treacherous conditions.

    Leutze's work was instrumental in creating visual narratives of American national identity, transforming historical moments into powerful symbolic representations of courage, determination, and the pursuit of freedom.`
  },
  {
    place: 'Uffizi Gallery, Florence - Italy',
    title: 'The Birth',
    title2: 'of Venus',
    description: 'A quintessential work of the Italian Renaissance, this painting represents the mythological birth of Venus, the goddess of love and beauty. Botticellis masterpiece is renowned for its elegant composition, delicate colors, and neo-Platonic philosophical symbolism.',
    image: florenceImg,
    artist: 'Sandro Botticelli',
    year: 1486,
    authorPortrait: botticelliPortrait,
    authorBio: 'A pivotal artist of the Early Renaissance in Florence, Botticelli was known for his mythological and allegorical paintings that blended classical mythology with Christian symbolism.',
    keyWorks: ['Primavera', 'The Birth of Venus', 'Madonna of the Magnificat'],
    birthDeath: '1445-1510',
    fullBiography: `Sandro Botticelli was a leading painter of the Florentine Renaissance, working during the golden age of artistic innovation under the patronage of Lorenzo de' Medici. His work represents a pivotal moment in art history, bridging medieval traditions with Renaissance humanism.

    Botticelli's paintings are characterized by their lyrical quality, elegant line work, and complex allegorical meanings. The Birth of Venus, perhaps his most famous work, exemplifies the Renaissance fascination with classical mythology and neo-Platonic philosophy. The painting depicts the goddess Venus emerging from the sea, symbolizing both physical beauty and divine love.

    Despite falling out of favor towards the end of his life due to the rise of more naturalistic styles, Botticelli's work was rediscovered and celebrated in the 19th century, influencing generations of artists and becoming emblematic of Renaissance artistic achievement.`
  },
  {
    place: 'Van Gogh Museum, Amsterdam - Netherlands',
    title: 'The',
    title2: 'Bedroom',
    description: 'A deeply personal and emotionally charged work, Van Goghs The Bedroom is more than just an interior scene its a window into the artists inner world. Created during his time in Arles, this painting represents a rare moment of stability in Van Goghs tumultuous life.',
    image: bedroomImg,
    artist: 'Vincent van Gogh',
    year: 1888,
    authorPortrait: vanGoghPortrait,
    authorBio: 'A post-impressionist painter whose work is characterized by bold colors, emotional intensity, and expressive brushwork that profoundly influenced 20th-century art.',
    keyWorks: ['Starry Night', 'Sunflowers', 'The Potato Eaters'],
    birthDeath: '1853-1890',
    fullBiography: `Vincent van Gogh was a Dutch post-impressionist painter whose work is among the most famous and influential in Western art history. Despite creating approximately 2,100 artworks in just over a decade, he was commercially unsuccessful during his lifetime and suffered from mental health challenges.

    Van Gogh's artistic style was revolutionary, characterized by bold, emotional use of color and energetic, expressive brushstrokes. His paintings often conveyed intense psychological states, transforming seemingly mundane scenes into profound emotional landscapes. The Bedroom paintings, created in Arles, France, represent his longing for stability and connection.

    Though he sold only one painting during his lifetime, Van Gogh is now recognized as a pivotal figure who bridged 19th-century impressionism and the radical artistic innovations of the 20th century. His life and work have become synonymous with the archetypal tortured artist, whose genius was only fully recognized after his death.`
  },
  {
    place: 'Rijksmuseum, Amsterdam - Netherlands',
    title: 'The',
    title2: 'Night Watch',
    description: 'Rembrandts most celebrated work, "The Night Watch" is a revolutionary group portrait that transformed the genre of painting. Contrary to its name, the painting actually depicts a day scene of a militia company, breaking away from traditional static group portraits.',
    image: nightWatchImg,
    artist: 'Rembrandt',
    year: 1642,
    authorPortrait: rembrandtPortrait,
    authorBio: 'The most important Dutch master of the 17th century, renowned for his extraordinary ability to render human emotion and mastery of light and shadow.',
    keyWorks: ['The Night Watch', 'The Return of the Prodigal Son', 'Self-Portrait with Two Circles'],
    birthDeath: '1606-1669',
    fullBiography: `Rembrandt Harmenszoon van Rijn was a Dutch painter and etcher who is considered one of the greatest visual artists in the history of art and the most important in Dutch art history. His contributions to painting were revolutionary, particularly in his mastery of light, psychological insight, and dramatic compositions.

    The Night Watch, his most famous work, is a masterpiece that broke all conventions of group portraiture. Unlike traditional static group paintings, Rembrandt created a dynamic scene full of movement, dramatic lighting, and individual psychological character. The painting depicts the militia company of Captain Frans Banning Cocq and Lieutenant Willem van Ruytenburch.

    Beyond his paintings, Rembrandt was also a prolific and innovative printmaker. His etchings and drawings reveal an extraordinary ability to capture human emotion and complexity. Throughout his life, he created numerous self-portraits that chart his personal and artistic evolution, providing an intimate window into his inner world.`
  }
];

const AuthorModal = ({ artist, isOpen, onClose }) => {
  const selectedArtist = galleryData.find(item => item.artist === artist);

  if (!selectedArtist) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#3A3A3A] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden grid grid-cols-3 shadow-2xl"
          >
            {/* Left Column - Portrait and Basic Info */}
            <div className="col-span-1 bg-[#2A2A2A] p-6 flex flex-col items-center justify-center">
              <motion.img 
                src={selectedArtist.authorPortrait} 
                alt={selectedArtist.artist}
                className="w-56 h-56 object-cover rounded-full border-4 border-[#D4AF37] shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-[#D4AF37] text-center mb-2">
                {selectedArtist.artist}
              </h2>
              <div className="flex items-center text-white">
                <Calendar className="mr-2 text-[#D4AF37]" size={18} />
                <p>{selectedArtist.birthDeath}</p>
              </div>
            </div>

            {/* Right Column - Detailed Biography */}
            <div className="col-span-2 p-6 overflow-y-auto text-white space-y-4">
              <motion.button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition"
              >
                <X className="w-8 h-8" />
              </motion.button>

              <div className="flex items-center mb-2">
                <BookOpen className="mr-3 text-[#D4AF37]" size={24} />
                <h3 className="text-2xl font-bold text-[#D4AF37]">Biography</h3>
              </div>

              <p className="text-base leading-relaxed mb-4">
                {selectedArtist.authorBio}
              </p>

              <div className="flex items-center mb-2">
                <Award className="mr-3 text-[#D4AF37]" size={24} />
                <h4 className="text-xl font-semibold text-[#D4AF37]">Key Works</h4>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {selectedArtist.keyWorks.map((work, index) => (
                  <div 
                    key={index}
                    className="p-2 rounded-lg border border-[#FFFFFF22]"
                  >
                    <p className="text-white text-sm">{work}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
    const navigate = useNavigate();

    const intervalRef = useRef(null);

    // Image Preloading
    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = galleryData.map(item => 
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = item.image;
                    img.onload = resolve;
                    img.onerror = reject;
                })
            );

            Promise.all(imagePromises)
                .then(() => setIsLoading(false))
                .catch(error => {
                    console.error('Image loading error:', error);
                    setIsLoading(false);
                });
        };

        preloadImages();
    }, []);

    // Auto-advance functionality
    useEffect(() => {
        if (isLoading || isPaused) return;

        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % galleryData.length);
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isLoading, isPaused]);

    // Navigation handlers
    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % galleryData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + galleryData.length) % galleryData.length);
    };

    // Loading State
    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-[#2A2A2A]">
                <div className="flex flex-col items-center">
                    <ImageIcon className="w-16 h-16 text-[#D4AF37] animate-pulse" />
                    <p className="mt-4 text-white">Loading Artworks...</p>
                </div>
            </div>
        );
    }

    return (
      <div 
          className="fixed inset-0 overflow-hidden bg-[#2A2A2A] flex items-center justify-center font-inter"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
      >
          {/* Main Gallery Content */}
          <div className="relative w-full max-w-full h-full flex justify-center items-center">
              <AnimatePresence>
                  <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30 
                      }}
                      className="absolute w-[90%] h-[90%] flex justify-center items-center"
                  >
                      <motion.div 
                          className="relative w-full h-full bg-cover bg-no-repeat bg-center"
                          style={{
                              backgroundImage: `url(${galleryData[currentIndex].image})`,
                              backgroundSize: 'contain',
                              borderRadius: '10px',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                          }}
                          whileHover={{ 
                              scale: 1.02,
                              boxShadow: '0 30px 50px rgba(0,0,0,0.6)'
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                      >
                          {/* Details Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/70 text-white rounded-b-[10px]">
                              <div className="flex items-center justify-between">
                                  <div>
                                      <div className="text-sm text-[#D4AF37] mb-2 uppercase tracking-wider">
                                          {galleryData[currentIndex].place}
                                      </div>
                                      <div className="text-3xl font-bold mb-3 flex items-center space-x-3">
                                          <span>{galleryData[currentIndex].title}</span>
                                          <span className="text-[#D4AF37]">{galleryData[currentIndex].title2}</span>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="text-sm mt-2">
                                  {galleryData[currentIndex].description}
                              </div>
                          </div>
                      </motion.div>
                  </motion.div>
              </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-40 right-5 transform -translate-x-1/2 flex space-x-4">
              <motion.button 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="bg-[#FFFFFF33] hover:bg-[#FFFFFF55] text-white p-3 rounded-full transition"
                  aria-label="Previous Image"
              >
                  <ChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="bg-[#FFFFFF33] hover:bg-[#FFFFFF55] text-white p-3 rounded-full transition"
                  aria-label="Next Image"
              >
                  <ChevronRight className="w-8 h-8" />
              </motion.button>
          </div>

          {/* About Artist Button */}
          <motion.button
              whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(212, 175, 55, 0.2)' 
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAuthorModalOpen(true)}
              className="absolute top-5 right-5 bg-[#FFFFFF33] hover:bg-[#FFFFFF55] text-white p-3 rounded-full transition flex items-center"
          >
              <Info className="w-6 h-6 mr-2" />
              About Artist
          </motion.button>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="flex space-x-2">
                  {galleryData.map((_, index) => (
                      <motion.div
                          key={index}
                          className={`h-1 w-8 rounded-full ${
                              index === currentIndex 
                                  ? 'bg-[#D4AF37]' 
                                  : 'bg-[#FFFFFF33]'
                          }`}
                          initial={{ scale: 1 }}
                          animate={{ 
                              scale: index === currentIndex ? 1.2 : 1,
                              transition: { duration: 0.3 }
                          }}
                      />
                  ))}
              </div>
          </div>

          {/* Return to Home Button */}
          <motion.button 
              whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(255,255,255,0.1)' 
              }}
              whileTap={{ scale: 0.9 }}
              className='absolute top-5 left-5 m-1 px-4 py-2 rounded-full flex justify-center items-center h-max w-max text-white border-2 border-white hover:cursor-pointer' 
              onClick={() => navigate("/")}
          >
              <ChevronLeft className="w-8 h-8" />To Home
          </motion.button>

          {/* Author Modal */}
          <AuthorModal 
              artist={galleryData[currentIndex].artist}
              isOpen={isAuthorModalOpen}
              onClose={() => setIsAuthorModalOpen(false)}
          />
      </div>
  );
};

export default Gallery;