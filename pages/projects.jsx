import TopPage from "../components/topPage";
import Project from "../components/project";

export default function Projects() {
    return (
        <TopPage>
            <h1 className="site-header">Some of my projects</h1>
            <div className="project-holder">
                <Project
                    link="https://to-do-list-gilt-ten.vercel.app/"
                    title="To Do List"
                    date="January 6th, 2023"
                    img="/images/todolist.png"
                />
            </div>
        </TopPage>
    );
}
