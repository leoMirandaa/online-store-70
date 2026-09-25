import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function About() {
  const user = useContext(GlobalContext).user;

  return (
    <div>
      <h1>About Page</h1>
      <p>Hello I am {user.name} from cohort {user.id}</p>
      <h2>lmiranda@sdgku.edu</h2>
    </div>
  )
}

export default About;