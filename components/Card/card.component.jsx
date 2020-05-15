import API_URL from '../../../routes';
import CustomButton from '../CustomButton/CustomButton.component';


const Card = ({name, price, description, gallery}) => {
    return (
        <div className='card'>            
            <div>
                <img className='card-image' src={`${API_URL}${gallery[0].url}`}/>
            </div>
            <div className='card-content'>
                <div>{name}</div>
                <div> {price} </div>
            </div>
            <div>
                <CustomButton>
                   <img className='icon' src ='/icon.svg'/> <div>Add to Cart</div>
                </CustomButton>
            </div>
        </div>
    )
}


export default Card;