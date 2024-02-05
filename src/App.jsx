import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
import Time from './components/Time/Time'
import Footer from './components/Footer/Footer'
import { times } from './data'

export default function App() {
  const [collaborators, setCollaborators] = useState([])

  function addCollaborators(collaborator) {
    // setCollaborators(prevState => [...prevState, collaborator])
    // console.log(collaborators)

    setCollaborators(prevState => {
      const updatedCollaborators = [...prevState, collaborator];
      console.log(updatedCollaborators);
      return updatedCollaborators;
    });
  }

  return (
    <>
      <Banner />
      <Form onRegisterCollaborator={collaborator => addCollaborators(collaborator)} />
      {
        times.map((time, index) => (
          <Time
            key={index}
            name={time['name']}
            primaryColor={time['primaryColor']}
            secondaryColor={time['secondaryColor']}
            collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
          />
        ))
      }
      <Footer />
    </>
  )
}

