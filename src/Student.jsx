

const Student = (props) => {
  console.log(props.student, 'inherited from parent component')
  return(
    <div>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx) => (
        <div>
          <p>{score.date}</p>
          <p>{score.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;