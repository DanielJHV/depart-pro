function Home() {
  return (
    <div className="home">
      <h1 className="heading-primary">Welcome to DepartPro!</h1>
      <div className="home-img-box">
        <img src="src/assets/home-img.jpeg"></img>
      </div>
      <p>What would you like to do?</p>
      <div className="home-btn-container">
        <a href="/employees" class="btn-manage">
          Manage employees
        </a>
        <a href="/departments" class="btn-manage">
          Manage departments
        </a>
      </div>
    </div>
  );
}

export default Home;
