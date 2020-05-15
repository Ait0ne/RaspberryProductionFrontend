import React from 'react';
import Gallery from '../components/Gallery/gallery.component';
import Link from 'next/link';


const App = (props) => {
  return (
    <div className='main-container'>
      <Link href='/itemgallery'>
        <button>Items</button>
      </Link>
    </div>
  )
}




export default App;