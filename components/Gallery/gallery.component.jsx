import React from 'react';
import Card from '../Card/card.component';
import Pagination from 'react-js-pagination';
import Select from 'react-select';
import customStyles from './gallery.styles';
import {connect} from 'react-redux';
import {setCurrentPage} from '../../src/redux/pagination/pagination.action';
import {setCurrentFilter} from '../../src/redux/filter/filter.action';
import {setCurrentSort} from '../../src/redux/sort/sort.action';
import {motion} from 'framer-motion';

const mapStateToProps = state => ({
    currentFilter: state.filter.currentFilter,
    sorted: state.sort.sorted,
    activePage: state.pagination.activePage,
    perPage: state.pagination.perPage,
    pageRange: state.pagination.pageRange
})

const mapDispatchToProps = dispatch => ({
    handlePageChange: pageNumber => dispatch(setCurrentPage(pageNumber)),
    onSortChange: selectedOption => {
            dispatch(setCurrentSort(selectedOption.value));
            dispatch(setCurrentPage(1));
        },
    onSelectChange: selectedOption => {
        if (selectedOption.value==='All'){
            return dispatch(setCurrentFilter(''))
        } else{
        dispatch(setCurrentFilter(selectedOption.value));
        dispatch(setCurrentPage(1));
        }
    },
})


class Gallery extends React.Component {


    onSelectChange =(selectedOption) => {
        if (selectedOption.value==='All'){
            setCurrentFilter('');
        } else{
        setCurrentFilter(selectedOption.value);
        setCurrentPage(1);
        }
    }



    render() {
        const stagger = {
            animate: {
                transition: {
                    staggerChildren: 0.09
                }
            }
        }



        const {currentFilter, sorted, activePage, perPage, pageRange, onSortChange, handlePageChange,onSelectChange} = this.props
        let filteredItems = this.props.props.items.filter(item => {
            return item.categories[0].name.includes(currentFilter)
        })
        
        if (sorted==='Lower Price') {
            (filteredItems.sort((a,b) => a.price - b.price))
        }else if (sorted==='Higher Price'){
            (filteredItems.sort((a,b) => b.price - a.price))
        }else if(sorted==='Newest') {
            filteredItems.sort((a,b) => {
                return new Date(b.date) -new Date(a.date)
            })
        }

        
        const     filterOptions =  [{value:'All', label:'All'}]
        this.props.props.categories.map(category => {
            filterOptions.push({value:category.name, label:category.name})
        })

        const sortOptions = [
            {value:'Lower Price', label: 'Lower Price'},
            {value:'Higher Price', label:'Higher Price'},
            {value:'Newest', label: 'Newest'}
        ]


        return(
            <motion.div className='gallery-container'
            
            >
                <div className='filters'>
                    <div className='filter-selects'>
                    {   
                        (this.props.props.categories[0]) ? 
                            <Select styles={customStyles} options={filterOptions} onChange={onSelectChange} placeholder='Category' isSearchable={false}/>
                        : (
                            <option>Loading</option>
                        )
                    }
                    <Select styles={customStyles} options={sortOptions} onChange={onSortChange} placeholder='Sort' isSearchable={false}/>
                    </div>
                    <span className='filters-range'>
                        <span className='filter-range-number'>{(activePage-1)*perPage+1}</span>-
                        <span className='filter-range-number'>{activePage*perPage>filteredItems.length ? filteredItems.length : activePage*perPage}</span> out of 
                        <span className='filter-range-number'>{filteredItems.length}</span> results
                    </span>
                    {
                        (filteredItems.length>perPage) ?
                            <Pagination 
                                activePage={activePage}
                                itemsCountPerPage={perPage}
                                totalItemsCount={filteredItems.length}
                                pageRangeDisplayed={pageRange}
                                onChange={handlePageChange.bind(this)}
                            />
                        : ('')
                    }
                
                </div>
                {
                    !this.props.props.items[0] ?
                        <h1>Loading</h1>
                    :(
                        <motion.div className='gallery' 
                        variants={stagger}
                        >
                            {
                            filteredItems.slice((activePage-1)*perPage,activePage*perPage).map((item, index) =>{
                                    // return <Link href='itemgallery/[item]' as='itemgallery' passHref><Card key={id} id={id} name={name} {...otherProps}/></Link>
                                    return <Card key={item.id} item={item} index={index}  />
                            })}
                        </motion.div>
                    )                    
                }

            </motion.div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);