const Feature = ({ icon, title, description }) => (
  <div className="feature-card">
    <i className={`feature-icon ${icon}`}></i>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Dashboard = () => {
  const startSimulation = () => {
    window.location.href = "simulator.html";
  };

  return (
    <>
      <div className="background-animation"></div>
      <div className="dashboard">
        <section className="hero">
          <div className="hero-content">
            <h1 className="title">Dash</h1>
            <p className="subtitle">
              Experience the future of autonomous driving with our WebGL-powered
              simulator
            </p>
            <button onClick={startSimulation} className="cta-button">
              Launch Simulator
            </button>

            <div className="features">
              <Feature
                icon="fas fa-robot"
                title="Real-Time Planning"
                description="Experience autonomous vehicle motion planning in real-time using WebGL acceleration"
              />
              <Feature
                icon="fas fa-road"
                title="Dynamic Environment"
                description="Test the vehicle's behavior in various road conditions and scenarios"
              />
              <Feature
                icon="fas fa-chart-line"
                title="Advanced Analytics"
                description="Monitor speed, position, and planning metrics in real-time"
              />
              <Feature
                icon="fas fa-cogs"
                title="Interactive Controls"
                description="Switch between manual and autonomous modes, customize scenarios"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById("root"));
