import './App.css'
import { Button } from './components/Button'
import AddIcon from '@mui/icons-material/FavoriteBorderOutlined';

function App() {

  return (
    <>
      <h1>Lab 5 - Button Component</h1>

      {/* Testing your Button component */}
      
      <Button>My Button</Button>
      <Button>Fill/Medium/Primary</Button>
      <Button variant="outline">Outline/Medium/Primary</Button>
      <Button variant="text">Text/Medium/Primary</Button>
      <Button color="secondary" size="large" icon={<AddIcon />} onClick={()=>{ alert("Button clicked!")}}>
        Fill/Large/Secondary/Icon/OnClick
      </Button>
      <Button disabled size="small">Fill/Small/Disabled</Button>
      
      {/* <Button variant = "fill" color = "secondary">Fill/Secondary</Button>
      <Button variant = "outoine" color = "primary" size = "large">Outline/Large/Primary</Button>
      <Button variant = "text" color = "primary" onClick ={() => {alert("Button clicked!")}}>Text/Primary/OnClick</Button>
      <Button disabled size = "small">Fill/Small/Disabled</Button> */}
    </>
  )
}

export default App
