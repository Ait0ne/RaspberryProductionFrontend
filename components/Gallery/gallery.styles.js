const customStyles = {

    option: () => ({
        backgroundColor: '#f39db6',
        padding:'5px 10px',
        ':hover': {
            backgroundColor:'rgba(10,10,10,0.1)'
        }

    }),
    menu: () => ({
        position:'absolute',
        backgroundColor: '#f39db6',
        color:'#fefafa',
        borderRadius:'5px',
        width:'160px',
        cursor:'pointer',
        textDecoration:'underline',
        zIndex:999,
    }),

    singleValue: () => ({
        backgroundColor: '#f39db6',
        color:'#fefafa',
        borderRadius:'5px',
    }),

    placeholder: () => ({
        color: '#fefafa',
        display:'flex',

    }),
    valuecontainer: () => ({
        display:'flex',
        justifyContent: 'center',
        height:'30px',

    }),
    dropdownIndicator: (provided,state) => ({
        ...provided,
        color: '#fefafa',
        ':hover': {
            color:'#6a4162',
        }


    }),
    indicatorContainer: () => ({
        color: '#fefafa',

    }),
    container: () => ({
        marginLeft: '10px',

    }),


    control: () => ({
        display:'flex',
        flexDirection: 'row',
        width: '160px',
        border: 'none',
        backgroundColor:'#f39db6',
        color: '#fefafa',
        height:'auto',
        fontSize: '17px',
        borderRadius: '2rem',
        paddingLeft:'5px',
        borderBottom: '1px solid rgba(10,10,10,0.1)',
        boxShadow:  '1px 1px 2px #c56b84, -1px -1px 2px #ffffff',
        ':active':{
            transform: 'translate(1px,1px)',
            boxShadow: 'none',
        },
        ':hover': {
            cursor:'pointer',
        }
    })
}

export default customStyles;