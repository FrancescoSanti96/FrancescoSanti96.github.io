import { useNavigate } from "react-router-dom";
import { ProjectCardComponent } from "../../components/projectCard";
import imageAliment from "../../img/alimenti.gif";
import imageMoney from "../../img/money.gif";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <ProjectCardComponent
        image={imageAliment}
        imageAlt="food project"
        title="Gestione alimenti"
        text="Questo progetto nasce per noi amanti del cibo ed è semplice gestore dei nostri alimenti.
                inizialmente suddiviso in cibo nel frigorifer, in maggazino e nella lista della spesa.
                Ma è configurabile e addatibile alle nostre esigenze.

                Sviluppato per l'esame finale del modulo di Laravel-PHP in cui si doveva creare un CRUD."
        info=" Strumenti: Laravel-PHP, Mysqsl"
        link="https://github.com/FrancescoSanti96/ITS-2-esame_santi"
      />

<ProjectCardComponent
        image={imageMoney}
        imageAlt="money project"
        title="Cake Money"
        text="Questo progetto nasce per la gestione del denaro.
                Sviluppato in team da 5 persone per l'esame finale del modulo di Flutter-Dart in cui si doveva creare un applicazione."
        info=" Strumenti: Flutter- Dart"
        link="https://github.com/FrancescoSanti96/CakeMoney"
      />
    </div>
  );
}
