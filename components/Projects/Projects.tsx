import Carousel from "@brainhubeu/react-carousel";
import ProjectItem from "./ProjectItem";
import { ArrowLeft, ArrowRight } from "../Utils/Arrows/Arrows";

import "@brainhubeu/react-carousel/lib/style.css";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 id="projects">Projects</h1>

      <Carousel
        className={styles.carousel}
        // @ts-ignore
        arrowLeft={<ArrowLeft />}
        arrowLeftDisabled={<></>}
        arrowRight={<ArrowRight />}
        arrowRightDisabled={<></>}
        addArrowClickHandler
      >
        <ProjectItem
          previewImagePath="/images/projects/johndoephotogallery.webp"
          previewUrl="https://johndoephotogallery.netlify.app/"
          sourceUrl="https://github.com/TibiTiberiu35/John-Doe-Photo-Gallery"
        >
          <h2>John Doe mountain birds photo gallery</h2>
          <p>
            It is a web photo gallery for a fictional photographer named John
            Doe. The website includes a blog about his adventures in some superb
            mountain landscapes, a gallery with images of a variety of wild
            birds, each one coming with a short description, and links to John's
            social media accounts.
          </p>
        </ProjectItem>
        <ProjectItem
          previewImagePath="/images/projects/brosgamesworld.webp"
          previewUrl="https://brosgamesworld.netlify.app/"
          sourceUrl="https://github.com/TibiTiberiu35/BrosGamesWorld"
        >
          <h2>BrosGamesWorld retro games website</h2>
          <p>
            It is a modern-looking website with full access to simple but fun
            games. The main pages and some of the games are designed and built
            by me.
          </p>
        </ProjectItem>
        <ProjectItem
          previewImagePath="/images/projects/sweetmemegenerator.webp"
          previewUrl="https://sweetmemegenerator.netlify.app/"
          sourceUrl="https://github.com/TibiTiberiu35/sweet-meme-generator"
        >
          <h2>Meme Generator web app</h2>
          <p>
            It is a website for making your memes come to life as easy and fast
            as possible.
          </p>
        </ProjectItem>
      </Carousel>
    </div>
  );
};

export default Projects;
