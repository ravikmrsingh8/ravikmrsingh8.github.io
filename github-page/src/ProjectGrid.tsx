import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';
import Nav  from 'react-bootstrap/Nav';
import projects from "./projects.json"

interface Project {
    id: number;
    title: string;
    imageUrl: string;
    readMeUrl: string;    
}

function ProjectGrid() {

    return (
        <Container className='flexbox'>
            {projects.map((project:Project)=> <ProjectContainer key={project.id} project={project}/>)}
        </Container>
  );
}


interface ProjectProps {
    project: Project;
}

export function ProjectContainer(props: ProjectProps) {
    const {title, imageUrl, readMeUrl} = props.project;
    return (
        <div className='flex-item'>  
            <Nav.Link href={readMeUrl}>
                <ProjectCard 
                    title={title}
                    imageUrl={imageUrl}
                />
            </Nav.Link>
        </div>
    );
}

export default ProjectGrid;