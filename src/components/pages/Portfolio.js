import React from 'react';
import project2Image from '../../assets/images/SoBadItsGood.png'
import project1Image from '../../assets/images/CardsAgainstApathyScreenshot.png'
import homework1Image from '../../assets/images/techblog.png'
import homework2Image from '../../assets/images/notetaker.png'
import project3Image from '../../assets/images/TimeWellSpent.png'

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
        <section>
            <h4 id="my-work">My Work</h4>
            <figure className="gallery">
                <a href="https://morning-wildwood-88697.herokuapp.com/" className="portfolio-link">
                    <img src={project3Image} alt="app that allows charities and users to " className="portfolio-image-Proj" />
                </a>
                <a href="https://so-bad-its-good.herokuapp.com/" className="portfolio-link">
                    <img src={project2Image} alt="movie review site that allows users to rate film quality and fun factor" className="portfolio-image-Proj"/>
                </a>
                <a href="https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/" className="portfolio-link">
                    <img src={project1Image} alt="workout app using cards and poker chips" className="portfolio-image-Proj"/>
                </a>
                <a href="https://calcagno-tech-blog.herokuapp.com/" className="portfolio-link">
                    <img src={homework1Image} alt="tech-blog" className="portfolio-image"/>
                </a>
                <a href="https://note-taker-calcagno.herokuapp.com/" className="portfolio-link">
                    <img src={homework2Image} alt="note-taker" className="portfolio-image"/>
                </a>
            </figure>
        </section>
    </div>
  );
}
