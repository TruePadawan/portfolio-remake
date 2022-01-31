import { useReducer } from 'react';
import ReactToolTip from 'react-tooltip';
import Card from '../../Card/Card';
import Modal from '../../Modal/Modal';
import styles from './Projects.module.css';
import projectInfo from './projects_helpers';

const projectItemsModalStateReducer = (currentState, action) => {
    if (action.type === "PORTFOLIO_CLICKED")
    {
        return { portfolioClicked: !currentState.portfolioClicked, theNewsClicked: currentState.theNewsClicked,
            nipsieClicked: currentState.nipsieClicked, notepadClicked: currentState.notepadClicked
        };
    }else if (action.type === "THE_NEWS_CLICKED")
    {
        return { portfolioClicked: currentState.portfolioClicked, theNewsClicked: !currentState.theNewsClicked,
            nipsieClicked: currentState.nipsieClicked, notepadClicked: currentState.notepadClicked
        };
    }else if (action.type === "NIPSIE_CLICKED")
    {
        return { portfolioClicked: currentState.portfolioClicked, theNewsClicked: currentState.theNewsClicked,
            nipsieClicked: !currentState.nipsieClicked, notepadClicked: currentState.notepadClicked
        };
    }else
    {
        return { portfolioClicked: currentState.portfolioClicked, theNewsClicked: currentState.theNewsClicked,
            nipsieClicked: currentState.nipsieClicked, notepadClicked: !currentState.notepadClicked
        };
    }
}

const ProjectItem = (props) => {
    return (
      <>
        <a href="#" onClick={props.clickHandler} data-tip data-for={props.projectIconAlt}>
            <Card className={styles["projects-link-card"]}>
                <img src={props.projectIcon} alt={props.projectIconAlt} />
            </Card>
        </a>
        <ReactToolTip id={props.projectIconAlt} type="light" globalEventOff="click">
          <span>{props.tooltip}</span>
        </ReactToolTip>
      </>
    );
}

export default function Projects()
{
    const [projectItemsModalState, projectItemsModalStateDispatcher] = useReducer(projectItemsModalStateReducer, {
        portfolioClicked: false,
        theNewsClicked: false,
        nipsieClicked: false,
        notepadClicked: false
    });

    return (
      <>
        {projectItemsModalState.portfolioClicked && (
          <Modal
            title={projectInfo.portfolio.name}
            message={projectInfo.portfolio.desc}
            exitModal={() => {
                projectItemsModalStateDispatcher({ type: "PORTFOLIO_CLICKED" });
            }}
          >
            <p>
              <strong>Stack: </strong>
              {projectInfo.portfolio.stack}
            </p>
          </Modal>
        )}

        {projectItemsModalState.theNewsClicked && (
            <Modal
              title={projectInfo.news.name}
              message={projectInfo.news.desc}
              exitModal={() => {
                  projectItemsModalStateDispatcher({ type: "THE_NEWS_CLICKED"});
              }}>
                <p>
                    <strong>Stack: </strong>
                    {projectInfo.news.stack}
                </p>
                <a href="https://the-news.herokuapp.com/" target="_blank" rel="noreferrer">Live View</a>
            </Modal>
        )}

        {projectItemsModalState.nipsieClicked && (
            <Modal
                title={projectInfo.nipsie.name}
                message={projectInfo.nipsie.desc}
                exitModal={() => {
                    projectItemsModalStateDispatcher({ type: "NIPSIE_CLICKED" });
                }}>
                    <p>
                        <strong>Stack: </strong>
                        {projectInfo.nipsie.stack}
                    </p>
                    <a href="https://github.com/TruePadawan/Nipsie" target="_blank" rel="noreferrer">View on GitHub</a>
            </Modal>
        )}

        {projectItemsModalState.notepadClicked && (
            <Modal
                title={projectInfo.notepad.name}
                message={projectInfo.notepad.desc}
                exitModal={() => {
                    projectItemsModalStateDispatcher({ type: "NOTEPAD_CLICKED" });
            }}>
                <p>
                    <strong>Stack: </strong>
                    {projectInfo.notepad.stack}
                </p>
                <a href="https://github.com/TruePadawan/Notepad--" target="_blank" rel="noreferrer">View on GitHub</a>
            </Modal>
        )}
        <Card className={styles["projects-card"]}>

          <span>Sample Projects</span>

          <div className={styles["projects"]}>
            <ProjectItem
              clickHandler={(e) => {
                e.preventDefault();
                projectItemsModalStateDispatcher({ type: "PORTFOLIO_CLICKED" });
              }}
              projectLink="https://truepadawan.github.io/portfolio-remake/"
              projectIcon="https://img.icons8.com/fluency/48/000000/portfolio.png"
              projectIconAlt="Portfolio"
              tooltip="My Portfolio"
            />

            <ProjectItem
              clickHandler={(e) => {
                e.preventDefault();
                projectItemsModalStateDispatcher({ type: "THE_NEWS_CLICKED" });
              }}
              projectLink="https://github.com/TruePadawan/The-News-Project"
              projectIcon="https://img.icons8.com/dusk/64/000000/news.png"
              projectIconAlt="The News"
              tooltip="The News - Website which displays News Data gotten from an API"
            />

            <ProjectItem
              clickHandler={(e) => {
                e.preventDefault();
                projectItemsModalStateDispatcher({ type: "NIPSIE_CLICKED" });
              }}
              projectLink="https://github.com/TruePadawan/Nipsie"
              projectIcon="https://img.icons8.com/cotton/64/000000/mushroom.png"
              projectIconAlt="Nipsie"
              tooltip="Nipsie - Music Player"
            />

            <ProjectItem
              clickHandler={(e) => {
                e.preventDefault();
                projectItemsModalStateDispatcher({ type: "NOTEPAD_CLICKED" });
              }}
              projectLink="https://github.com/TruePadawan/Notepad--"
              projectIcon="https://img.icons8.com/fluency/50/000000/notepad.png"
              projectIconAlt="Notepad--"
              tooltip="Notepad-- - Simple Text Editor"
            />
          </div>
        </Card>
      </>
    );
}