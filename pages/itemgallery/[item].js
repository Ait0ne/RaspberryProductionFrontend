import React, {useState, Fragment} from 'react';
import { useRouter } from 'next/router';
import API_URL from '../../routes';
import {addMultipleItems} from '../../src/redux/cart/cart.actions';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Footer  from '../../components/Footer/footer.component';
import Scrollbar from 'react-scrollbars-custom';
import ReviewForm from '../../components/Review/review.component'
import {motion} from 'framer-motion'

const easing = [.6, -.05, .01, .99]

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const fadeInUp = {
    initial: {
        y:60,
        opacity: 0
    },
    animate: {
        y:0,
        opacity:1,
        transition: {
            duration: .3,
            ease: easing
        }
    }
};






const ItemPage =({item, addMultipleItems}) => {
        
        const [quantity, setQuantity] = useState(1)
        const [currentImage, setCurrentImage] = useState(0)
        const [comments, setComments] = useState(item.comments? item.comments.slice(0).reverse():[])
        
        const onIncrease = () => {
            setQuantity(quantity+1)
        }



        const onDecrease = () => {
            if (quantity===1) {
                null
            } else {
                setQuantity(quantity-1)
            }
        }

        const addComments = (comment) => setComments([comment,...comments])

        return (
            <Fragment>

                <motion.div className='item-details-container'
                exit={{opacity:0}}
                initial={{opacity:0}}
                animate={{opacity: 1, transition: {duration:0.8}}}
                >
                    {console.log(item)}
                    <div className='item-details'>
                        <div className='item-details-gallery'>
                            <motion.div className='item-details-main-image'
                            >
                                <motion.img 
                                initial={{x:200, opacity:0}}
                                animate={{x:0, opacity: 1, transition:{duration: 0.5}}}
                                transition={{delay: 0.2}}
                                
                                alt='product-image' 
                                className='item-details-main-image-image'
                                 src={item.gallery[currentImage].url} />
                            </motion.div>
                            <div className='item-details-thumbnails'>
                                {item.gallery.slice(0,3).map((image,index) => 
                                    <img key={image.id} 
                                    className='item-details-thumbnails-image' 
                                    alt='image-thumbnail' 
                                    src={image.formats.thumbnail.url}
                                    onClick={() => setCurrentImage(index)}
                                    />
                                    )}
                            </div>
                        </div>
                        <div className='item-details-text-content'>
                            <div className='item-details-name'>
                                {item.name}
                            </div>
                            <div className='item-details-price'>
                                <span className='item-details-previous-price'>{item.price*1.2}</span>
                                <span className='item-details-current-price'>{item.price}</span>
                            </div>
                            <div className='item-details-description'>
                                {item.description}
                            </div>
                            <div className='item-details-categories'>
                                CATEGORIES: {
                                    item.categories.map((category,index) => <span key={index}>{category.name} </span>)
                                }
                            </div>
                            <div className='item-details-add-to-cart'>
                                <div className='item-details-quantity'>
                                <div className='item-details-quantity-text'>{quantity}</div>
                                    <div className='item-details-quantity-navigation'>
                                        <div className='item-details-quantity-arrows' onClick={onIncrease}><FontAwesomeIcon icon={faAngleUp} size='lg'/></div>
                                        <div className='item-details-quantity-arrows' onClick={onDecrease}><FontAwesomeIcon icon={faAngleDown} size='lg'/></div>
                                    </div>
                                </div>
                                <button type='button' className='item-details-add-to-cart-button' onClick={() => addMultipleItems([item,quantity])}>ADD TO CART</button>


                            </div>
                            <div className='item-comment-section'>
                                <span className='item-comment-section-title'>Reviews:</span>
                                {
                                    comments.length ?
                                <Scrollbar style={{height:'300px', width: '100%'}} >
                                    {comments.map((comment) => {
                                        return (
                                            <div key={comment.id} className='comment-text'>
                                                <div className='item-comment-name'>
                                                    {comment.name}
                                                </div>
                                                <div className='item-comment-date'>
                                                    {comment.date}
                                                </div>
                                                <div className='item-comment-text'>
                                                    {comment.text}
                                                </div>
                                                
                                            </div>
                                        )

                                    })}
                                </Scrollbar>
                                : <div className='no-comments' >
                                    There are no reviews for this item yet.
                                    </div>

                                }
                                <div className='review-container'>
                                    <ReviewForm item={item} addComments={addComments}/>                                    
                                </div>
                                   
                            </div>
                        </div>
                    </div>
                </motion.div>

                <Footer/>
            </Fragment>
        )
    }

ItemPage.getInitialProps = async ({query}) => {
    const resBouqet = await fetch(`${API_URL}/bouquets/${query.item}`)
    const dataBouqet = await resBouqet.json()
    return {item: dataBouqet}
}    

const mapDispatchToProps = dispatch => ({
    addMultipleItems: item => dispatch(addMultipleItems(item))
})

// export async function getServerSideProps(){
//         const resBouqet = await fetch(`${API_URL}/bouquets/12`)
//         const item = await resBouqet.json()
//         return {props: {item}}

//     }    

export default connect(null, mapDispatchToProps)(ItemPage);