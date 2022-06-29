import React from 'react';
import ExperienceCardComponent from "../../components/experienceCard";

export default function Experience() {
  return (
    <>
      <ExperienceCardComponent
        title="Study : Fitstic 2020 - 2022"
        text="ITS for web and cloud development, the course is a
        limited number, they are 2000 hours (of which 800 of internships)."
        // Italiano
        // text="Tecnico superiore per lo sviluppo web e cloud, Il corso è a
        //         numero chiuso, sono 2000 ore (di cui 800 di stage)."
        link="https://www.fitstic.it/it/b/4838/tecnicosuperioreperlosvilupposoftwarewebecloud"
      />
      <ExperienceCardComponent
        title="Job : DMA 05/2022 - 07/2022"
        text="Junior software developer"
        info="Frontend: React with Redux toolkit, HTML and CSS, HUGO, Boostrap, Tailwind css"
        link="https://www.diemmea.com/"
      />
      <ExperienceCardComponent
        title="Job : Inception 06/2021 - 08/2021"
        text="Remote Junior software developer"
        info="Frontend: Angular - Backend: .Net 5 - Database: semantic web."
        link="https://www.inceptionspinoff.com/en/inception-spinoff/ "
      />
      <ExperienceCardComponent
        title="Job : Tosti 2017 - 2020"
        text="IT Technician"
        // Italiano
        // text="Tecnico Informatico"
        link="https://www.tostisrl.it/en/"
      />
    </>
  );
}
