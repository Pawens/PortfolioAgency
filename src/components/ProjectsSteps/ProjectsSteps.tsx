import React from "react";
import ProjectsStep from "../ProjectsStep/ProjectsStep";
import "./ProjectsSteps.css";

function ProjectsSteps() {
  return (
    <div className="ProjectsStepsContainer">
      <ProjectsStep
        index={"01."}
        title="Prise de Contact"
        descriptions={[
          "+ Mise en contexte par rapport au marché.",
          "+ Analyse des besoins.",
          "+ Définnition des objectifs.",
        ]}
        first
      />
      <ProjectsStep
        index={"02."}
        title="Évaluation & Conceptualisation"
        descriptions={[
          "+ Arboressance des pages.",
          "+ Formalisation des fonctionalité attendu.",
          "+ Présentation du devis.",
        ]}
      />
      <ProjectsStep
        index={"03."}
        title="Design"
        descriptions={[
          "+ Charte graphique.",
          "+ Creation des Mockups.",
          "+ Défintion des animations.",
        ]}
      />
      <ProjectsStep
        index={"04."}
        title="Développement"
        descriptions={[
          "+ Développement des fonctionalités mentionnés.",
          "+ Intégration du design.",
          "+ Mise en place des animations.",
        ]}
      />
      <ProjectsStep
        index={"05."}
        title="Déploiment & Correctifs"
        descriptions={[
          "+ Test de l'ensemble des fonctionalités.",
          "+ Correction des bugs.",
          "+ Mise en ligne.",
        ]}
      />
      <ProjectsStep
        index={"06."}
        title="Livraison & Formation"
        descriptions={[
          "+ Formation à l'administration.",
          "+ Livraison des clés.",
          "+ Support après livraison.",
        ]}
      />
      <ProjectsStep
        index={"07."}
        title="Maintenance & Sécurité"
        descriptions={[
          "+ Mise à jour des stacks.",
          "+ Veiles et correction des nouvelles vulnérabilités.",
          "+ Backup des données.",
        ]}
      />
    </div>
  );
}

export default ProjectsSteps;
