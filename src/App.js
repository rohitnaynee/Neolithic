
import Directory from './components/directory/directory.component';

const App = () => { 

  const categories = [
    {
      "id": 1,
      "title": "Organic Pulses",
      "imageUrl": "../images/Pulses.jpg"
    },
    {
      "id": 2,
      "title": "Organic Dal",
      "imageUrl": "../images/Dal.jpg"
    },
    {
      "id": 3,
      "title": "Organic Rice",
      "imageUrl": "../images/Rice.jpg"
    },
    {
      "id": 4,
      "title": "Organic jaggery",
      "imageUrl": "../images/jaggery.jpg"
    },
    {
      "id": 5,
      "title": "Organic Honey",
      "imageUrl": "../images/honey.jpg"
    }
  ]


  return (
     <Directory categories = {categories} />
  );
} 

export default App;
