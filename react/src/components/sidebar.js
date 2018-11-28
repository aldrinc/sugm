import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
 
function SidebarExample() {
  return (
    <Router>
      <div >
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>
          ))}
        </div>  
      </div>
    </Router>
  );
}

export default SidebarExample;