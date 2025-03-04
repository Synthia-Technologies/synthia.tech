
function LangCard({ lang = 'javascript' }) {
    const icons = {
        javascript: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            name: "Javascript",
            description: "Logic behind my websites"
        },
        html: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            name: "HTML",
            description: "Structure behind my websites"
        },
        css: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            name: "CSS",
            description: "Style behind my websites"
        },
        react: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            name: "React",
            description: "Javascript framework for user interfaces"
        },
        git: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            name: "Git",
            description: "Collaboration and Version control"
        }
    };

    const { src, name, description } = icons[lang] || icons.javascript;

    return (
        <>
        <div className='langCards center'>
            <img alt={`${name} Icon`} src={src} />
            <h1 className='Arvo' style={{ paddingLeft: '10px' }}>{name}
                <p className='Roboto' style={{fontWeight: '400'}}>{description}</p>
            </h1>
        </div>
        </>
    );
}

export default LangCard;
