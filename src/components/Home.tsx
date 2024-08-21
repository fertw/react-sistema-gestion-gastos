const Home : React.FC = () => {
    return (
        <div className="jumbotron text-center">
        <h1 className="display-4">Bienvenido a Mi Aplicación</h1>
        <p className="lead">Esta es la página de inicio de mi aplicación React con Bootstrap.</p>
        <hr className="my-4" />
        <p>Utiliza esta aplicación para gestionar tus gastos personales de manera eficiente.</p>
        <a className="btn btn-success btn-lg" href="/gastos" role="button">Ver Gastos</a>
    </div>
    )
}
export default Home;