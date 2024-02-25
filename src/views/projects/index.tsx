import React from 'react';
import { ProjectCardComponent } from "../../components/projectCard";
import imageAliment from "../../assets/img/alimenti.gif";
import imageMoney from "../../assets/img/money.gif";

export default function Projects() {
  return (
    <div>
      <ProjectCardComponent
        image={imageAliment}
        imageAlt="Food project"
        title="Food management"
        text="This project is for people that love food and It's simple food management.
        Initial is split on food on the refrigerator, warehouse, and shopping list, but It's flexible and configurable for other necessities.

        Develop for the final exam of the module of Laravel-PHP, the task was to create a CRUD."
        info=" Tools: Laravel-PHP, Mysqsl"
        //Italiano
        // title="Gestione alimenti"
        // text="Questo progetto nasce per noi amanti del cibo ed è semplice gestore dei nostri alimenti.
        //         inizialmente suddiviso in cibo nel frigorifer, in maggazino e nella lista della spesa.
        //         Ma è configurabile e addatibile alle nostre esigenze.

        //         Sviluppato per l'esame finale del modulo di Laravel-PHP in cui si doveva creare un CRUD."
        // info=" Strumenti: Laravel-PHP, Mysqsl"
        link="https://github.com/FrancescoSanti96/ITS-2-esame_santi"
      />

      <ProjectCardComponent
        image={imageMoney}
        imageAlt="money project"
        title="Cake Money"
        text="This project is for the managment of the money.
              Develop in team of 5 people for the final exam of the module of FLutter-Dart, the task was to create an application."
        info=" Tools: Flutter- Dart"
        // Italiano
        // text="Questo progetto nasce per la gestione del denaro.
        //         Sviluppato in team da 5 persone per l'esame finale del modulo di Flutter-Dart in cui si doveva creare un applicazione."
        // info=" Strumenti: Flutter- Dart"
        link="https://github.com/FrancescoSanti96/CakeMoney"
      />
    </div>
  );
}
