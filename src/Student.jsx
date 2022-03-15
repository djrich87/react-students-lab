//Code the `<Student>` component as a function component that:
 //Renders the student's `name` & `bio` properties
 //Renders a `<Score>` component for each score object in the student's `scores` property.

import Bio from "./Bio";
import Name from "./Name";
import Score from "./Score";


const Student = (props) => {
  return(
    <div>
      <Bio />
      <Name />
      <Score />
    </div>
  );
}

export default Student;