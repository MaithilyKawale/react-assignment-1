import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Card from './components/card.jsx'
import image1 from './assests/image1.jpg';
createRoot(document.getElementById('root')).render(
  <>
 <Header title='Welcome to my app'/>
 <div>
 <Card name="Maithily" description="React developer" imageUrl={image1}/>
 </div>
</>
)
