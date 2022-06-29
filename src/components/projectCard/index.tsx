import React from 'react';
// The component used in the view project to create a card of a coding project.
interface ProjectCardComponentProps {
  readonly image: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly text: string;
  readonly info: string;
  readonly link: string;
}

export const ProjectCardComponent: React.FunctionComponent<ProjectCardComponentProps> = (props) => {
  const { image, imageAlt, title, text, info, link} = props;

    return (
      <div className="container">
      <div className="m-auto card mb-3 mt-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={image} className="img-fluid rounded-start d-block m-auto" alt={imageAlt} style={{ maxHeight: 400 }}/>
            </div>
            <div className="col-md-6 m-auto">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {text}
                </p>
                <p className="card-text">
                  {info}
                </p>
                <a href={link}><i className="bi bi-github icon"></i></a>      
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
