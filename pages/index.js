import React, { Fragment } from 'react';
import Gallery from '../components/Gallery/gallery.component';
import API_URL from '../routes.js';
import Footer from '../components/Footer/footer.component'
import {motion} from 'framer-motion';


const App = (props) =>  {
  

  // static async getInitialProps(ctx){
  //     const resBouqets = await fetch(`${API_URL}/bouquets`)
  //     const dataBouqets = await resBouqets.json()
  //     const resAccessories = await fetch(`${API_URL}/accessories`)
  //     const dataAccessories = await resAccessories.json()
  //     const resCategories = await fetch(`${API_URL}/categories`)
  //     const dataCategories = await resCategories.json()
  //     return {items:[...dataBouqets,...dataAccessories],categories:dataCategories}
  // }





      return (
        <Fragment>
            <motion.div className='item-gallery'
            exit={{opacity:0, transition:{duration:0.5}}}
            initial='initial'
            animate='animate'
            
            >
                <motion.div className='landing-image-container'
                initial={{ opacity:0}}
                animate={{opacity:1, transition:{duration: 1}}}
                >

                </motion.div>
                <Gallery props={props}/>
            </motion.div>
          <Footer/>
        </Fragment>
      )
  
}


export  async function  getStaticProps(ctx)  {
    const resBouqets = await fetch(`${API_URL}/bouquets`)
    const dataBouqets = await resBouqets.json()
    const resAccessories = await fetch(`${API_URL}/accessories`)
    const dataAccessories = await resAccessories.json()
    const resCategories = await fetch(`${API_URL}/categories`)
    const dataCategories = await resCategories.json()
    return {props:{items:[...dataBouqets,...dataAccessories],categories:dataCategories}}
}

export default App;