import "./PageTitle.css";

const PageTitle = ({ title }) => {
  return (
    <div className="header-container">
        <h1>
            { title }
        </h1>
        <p>
            Mantenimiento de { title }.
        </p>
    </div>
  )
}

export default PageTitle