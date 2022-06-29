import React from 'react';
// The coomponent used in the view experience to create a card of a specific experience like job or study
interface ExperienceCardProps {
  readonly title: string;
  readonly text: string;
  readonly info?: string;
  readonly link: string;
}

export const ExperienceCardComponent: React.FunctionComponent<ExperienceCardProps> = (props) => {
  const { title, text, info, link} = props;

    return (
      <>
      <div className="container">
        <div className="card mt-4 mb-2">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>
                {text}
              </p>
              <p>
              {info}
              </p>
              <footer className="blockquote-footer">
                <a href={link}>link</a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      </>
    );
  }
  export default ExperienceCardComponent;