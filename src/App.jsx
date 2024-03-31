import { useState } from 'react'
import './App.css'
import SelectableGrid from './components/Selectable-Grid'

function App() {
  return <div>
    <h1>selectable grids</h1>
    <SelectableGrid rows={15} cols={10}></SelectableGrid>
    </div>

}

export default App
