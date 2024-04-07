import previewImage from "../assets/illustration-article.svg";
import autorAvatar from "../assets/image-avatar.webp";

function App() {
  return (
    <>
      <main>
        <div className="prev-image">
          <img src={previewImage} alt="" />
        </div>
        <div className="content-wraper">
          <span className="tag-name">Learning</span>
          <p className="public-date">Published 21 Dec 2023</p>
          <h2>HTML & CSS foundations</h2>
          <p className="description">
            These languages ate the backbone of every website, definding structure, content, and presentation.
          </p>
        </div>

        <div className="author">
          <img src={autorAvatar} alt="" />
          <h5>Greg Hooper</h5>
        </div>
      </main>
    </>
  );
}

export default App;
