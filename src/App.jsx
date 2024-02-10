import "@fontsource/poppins";
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
import Time from './components/Time/Time'
import Footer from './components/Footer/Footer'
import { times, inicial } from './data'
import { useLocalState } from './hooks';

export default function App() {
  // const [collaborators, setCollaborators] = useState([])
  const [collaborators, setCollaborators] = useLocalState("collaborators", inicial)
  const [timesToUse, setTimesToUse] = useLocalState("timesToUse", times)

  function addCollaborators(collaborator) {
    // setCollaborators([...collaborators, collaborator])
    // console.log(collaborators)

    setCollaborators(prevState => {
      const updatedCollaborators = [...prevState, collaborator];
      console.log(updatedCollaborators);
      return updatedCollaborators;
    });
  }

  function removeCollaborator() {
    console.log('Deleting collaborator')
  }

  function handleChangeTheme({ color, id }) {
    setTimesToUse(timesToUse.map(time => {
      if (time['id'] === id) {
        time['color'] = color
      }
      return time
    }))
  }

  console.log(inicial)

  return (
    <>
      <Banner />
      <Form onRegisterCollaborator={collaborator => addCollaborators(collaborator)} />
      {
        timesToUse.map((time, index) => (
          <Time
            key={index}
            onChangeTheme={handleChangeTheme}
            color={time['color']}
            name={time['name']}
            collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
            onDelete={removeCollaborator}
            id={time['id']}
          />
        ))
      }
      <Footer />
    </>
  )
}

