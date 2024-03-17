import "./style.css";

export const Banner = ({children}) => {

    return(
        <>
        <div className="container-banner">
        <div className="content-banner">
        {children}
        </div>

        </div>
        </>
    )
}