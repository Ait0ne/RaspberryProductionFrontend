import React from 'react';
import Card from '../Card/card.component';
import API_URL from '../../../routes';
import Pagination from 'react-js-pagination';
import Select from 'react-select';
import customStyles from './gallery.styles'

class Gallery extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            //main state
            items:[],
            categories:[],
            //filters
            currentFilter:'',
            sorted: 'Newest',
            //pagination
            activePage:1,
            perPage:5,
            pageRange:3

        }
    }


    componentDidMount() {
        fetch(`${API_URL}/bouquets`)
        .then(res => res.json())
        .then(data => this.setState({items:[...this.state.items,...data]}))
        fetch(`${API_URL}/accessories`)
        .then(res => res.json())
        .then(data => this.setState({items:[...this.state.items,...data]}))
        fetch(`${API_URL}/categories`)
        .then(res => res.json())
        .then(data => this.setState({categories:data}))
    }

    // onSelectChange = (event) => {
    //     if (event.target.value==='All'){
    //         this.setState({currentFilter:''});
    //     } else{
    //     this.setState({currentFilter:event.target.value});
    //     }
    // }
    onSelectChange =(selectedOption) => {
        if (selectedOption.value==='All'){
            this.setState({currentFilter:''});
        } else{
        this.setState({currentFilter:selectedOption.value});
        }
    }

    onSortChange = (selectedOption) => {
        this.setState({sorted:selectedOption.value});
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    render() {
        let filteredItems = this.state.items.filter(item => {
            return item.categories[0].name.includes(this.state.currentFilter)
        })
        
        if (this.state.sorted==='Lower Price') {
            (filteredItems.sort((a,b) => a.price - b.price))
        }else if (this.state.sorted==='Higher Price'){
            (filteredItems.sort((a,b) => b.price - a.price))
        }else if(this.state.sorted==='Newest') {
            filteredItems.sort((a,b) => {
                return new Date(b.date) -new Date(a.date)
            })
        }

        
        const     filterOptions =  [{value:'All', label:'All'}]
        this.state.categories.map(category => {
            filterOptions.push({value:category.name, label:category.name})
        })

        const sortOptions = [
            {value:'Lower Price', label: 'Lower Price'},
            {value:'Higher Price', label: 'Higher Price'},
            {value:'Newest', label: 'Newest'}
        ]


        return(

            <div className='gallery-container'>
                <div className='filters'>
                    {   
                        (this.state.categories[0]) ? 
                            <Select styles={customStyles} options={filterOptions} onChange={this.onSelectChange} placeholder='Category' isSearchable={false}/>
                        : (
                            <option>Loading</option>
                        )
                    }
                    <Select styles={customStyles} options={sortOptions} onChange={this.onSortChange} placeholder='Sort' isSearchable={false}/>
                </div>
                {
                    !this.state.items[0] ?
                        <h1>Loading</h1>
                    :(
                        <div className='gallery'>
                            {
                            filteredItems.slice((this.state.activePage-1)*this.state.perPage,this.state.activePage*this.state.perPage).map(({id, name, ...otherProps }) =>{
                                    return <Card key={name} name={name} {...otherProps}/>
                            })}
                        </div>
                    )
                    
                }
                <div>
                    {
                        (filteredItems.length>this.state.perPage) ?
                            <Pagination 
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.perPage}
                                totalItemsCount={filteredItems.length}
                                pageRangeDisplayed={this.pageRange}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        : ('')
                    }
                </div>
            </div>
        )
    }
}


export default Gallery;