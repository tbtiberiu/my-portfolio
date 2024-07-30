import { Carousel } from 'react-responsive-carousel';
import ProjectItem from './ProjectItem';
import { ArrowLeft, ArrowRight } from '../Utils/Arrows/Arrows';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 id="projects">Projects</h1>

      <Carousel
        className={styles.carousel}
        renderArrowPrev={ArrowLeft}
        renderArrowNext={ArrowRight}
      >
        <ProjectItem
          previewImagePath="/images/projects/johndoephotogallery.webp"
          previewUrl="https://johndoephotogallery.netlify.app/"
          sourceUrl="https://github.com/tbtiberiu/John-Doe-Photo-Gallery"
        >
          <h2>John Doe mountain birds photo gallery</h2>
          <p>
            It is a web photo gallery for a fictional photographer named John
            Doe. The website includes a blog about his adventures in some superb
            mountain landscapes, a gallery with images of a variety of wild
            birds, each one coming with a short description, and links to
            John&apos;s social media accounts.
          </p>
        </ProjectItem>
        <ProjectItem
          previewImagePath="/images/projects/brosgamesworld.webp"
          previewUrl="https://brosgamesworld.netlify.app/"
          sourceUrl="https://github.com/tbtiberiu/BrosGamesWorld/"
        >
          <h2>BrosGamesWorld retro games website</h2>
          <p>
            BrosGamesWorld, a sleek and modern website dedicated to retro gaming
            enthusiasts. Here, you can dive into a collection of engaging
            single-player games, including the ever-popular Tic Tac Toe, where
            you can test your skills against a formidable bot.
          </p>
        </ProjectItem>
        <ProjectItem
          previewImagePath="/images/projects/sweetmemegenerator.webp"
          previewUrl="https://sweetmemegenerator.netlify.app/"
          sourceUrl="https://github.com/tbtiberiu/sweet-meme-generator/"
        >
          <h2>Meme Generator web app</h2>
          <p>
            SweetMemeGenerator is an intuitive web application built with React,
            designed to make meme creation both effortless and enjoyable.
            Leveraging a comprehensive library of meme images and the Imgflip
            API, this user-friendly platform allows you to effortlessly add text
            to your favorite memes.
          </p>
        </ProjectItem>
      </Carousel>
    </div>
  );
};

export default Projects;
