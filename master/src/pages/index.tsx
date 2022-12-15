import { Link, useLocation } from "@umijs/max";

export default function HomePage() {
  const location = useLocation();

  console.log("master location", location);
  return (
    <div>
      <h2>Qiankun Master Page</h2>

      <div>
        <Link to="/otherPage">
          <button>go-otherPage</button>
        </Link>
      </div>
    </div>
  );
}
