// import { CameraIcon, PencilIcon, StarIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { ProjectCardComponent } from "../../components/projectCard";
import image from "../../img/me.jpg";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <ProjectCardComponent
        image={image}
        imageAlt="food project"
        title="Gestione alimenti"
        text="Questo progetto nasce per noi amanti del cibo ed è semplice gestore dei nostri alimenti.
                inizialmente suddiviso in cibo nel frigorifer, in maggazino e nella lista della spesa.
                Ma è configurabile e addatibile alle nostre esigenze.

                Sviluppato per l'esame finale del modulo di Laravel-PHP in cui si doveva creare un CRUD."
        info=" Strumenti: Laravel-PHP, Mysqsl"
        link=""
      />

<ProjectCardComponent
        image={image}
        imageAlt="money project"
        title="Cake Money"
        text="Questo progetto nasce per la gestione del denaro.
                Sviluppato in team per l'esame finale del modulo di Flutter-Dart in cui si doveva creare un applicazione."
        info=" Strumenti: Flutter- Dart"
        link=""
      />
    </div>
  );
}
