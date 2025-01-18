

type ButtonProps = {
    href?: string;
    target?: string;
    label: string;
    icon?: string;
    classes?: string;
}

const ButtonPrimary = ({href, target= '_self', label, icon, classes}:ButtonProps) => {
  
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-primary ${classes}`}>
               {label} {icon && <span className="material-symbols-rounded">{icon}</span>} 
            </a>
        )
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
               {label} {icon && <span className="material-symbols-rounded">{icon}</span>} 
            </button>
        )
    }
}


const ButtonOutline = ({href, target= '_self', label, icon, classes}:ButtonProps) => {
  
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-outline ${classes}`}>
               {label} {icon && <span className="material-symbols-rounded">{icon}</span>} 
            </a>
        )
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
               {label} {icon && <span className="material-symbols-rounded">{icon}</span>} 
            </button>
        )
    }
}

export { ButtonPrimary, ButtonOutline }