export default function Project(props) {
    return (
        <a href={props.link}>
            <div className="project">
                <img src={props.img} alt={props.imgAlt} />
                <h4>
                    {props.title}
                    <span class="material-symbols-outlined">north_east</span>
                </h4>
                <p>{props.date}</p>
            </div>
        </a>
    );
}
