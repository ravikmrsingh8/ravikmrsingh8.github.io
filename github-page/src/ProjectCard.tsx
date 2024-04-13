import { Figure } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
}

function ProjectCard(props: ProjectCardProps) {
    const {imageUrl, title} = props;
    return (
        <Card className='bg-dark text-white'>   
            <Card.Header>{title}</Card.Header>
            <Card.Img src={imageUrl} alt="Card image" />
        </Card>
  );
}

export default ProjectCard;