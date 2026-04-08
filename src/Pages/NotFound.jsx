import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="om-mig">
      <div className="om-mig-box">
        <h2>Sidan finns inte</h2>
        <p>Den här sidan kunde inte hittas.</p>
        <Link to="/" className="knapp">
          Till startsidan
        </Link>
      </div>
    </section>
  );
}

