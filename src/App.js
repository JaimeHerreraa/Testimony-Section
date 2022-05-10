import './App.css';
import Testimony from './components/Testimony';

const App = () => {
  const data = [{id:1, name: "Shawn", country: "Singapore", job: "Software engineer", company: "Amazon", description: '"It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."'},
  {id:2, name: "Sarah", country: "Nigeria", job: "Software engineer", company: "ChatDesk", description: '"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."'},
  {id:3, name: "Emma", country: "Sweden", job: "Software engineer", company: "Spotify", description: '"I have always struggled with learning JavaScript. I have taken many courses but the freeCodeCamp course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."'}
]

  return (
    <div className="App">
      <div className="testimony-section">
        <h1 className="testimony-tittle">Here is what our alumni say about freeCodeCamp:</h1>
        {data.map((person) => {
          return <Testimony key={person.id} {...person}/>
        })}
      </div>
    </div>
  );
}

export default App;