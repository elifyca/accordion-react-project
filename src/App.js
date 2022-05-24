
import React, {useState} from "react"
import data from "./data";
import SingleQuestion from "./Ouestion ";
import SingleOuestion from "./Ouestion ";


function App() {
  const [questions, SetQuestions]=useState(data);
  
  return (
    <main>
      <div className="container">
        <h3>questions and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion  key={question.id} {...question}></SingleQuestion>
            )
          })}

        </section>
        </div>
    </main>
  );
}

export default App;
