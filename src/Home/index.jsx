import React, {useState, useEffect} from 'react'
import _uniqueId from 'lodash/uniqueId';
import {Flex, Wrapper} from './styles'
import {Button, Paper, TextField, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState({
        id: '',
        activity: ''
    })
    const [list, setList] = useState([])
    const handleChange = (e) => {
        setValue({
            activity: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        list.push({
            id: _uniqueId('prefix-'),
            todo: value.activity
        })
        setOpen(true)
        setValue({
            activity: ''
        })
        localStorage.setItem('mydata', JSON.stringify(list))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSubmit()
        }
    }
    const handleDelete = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        localStorage.setItem('mydata', JSON.stringify(newList))
    }
    const getLocal = () => {
        if(localStorage.getItem('mydata') === null){
            localStorage.setItem('mydata', JSON.stringify([]))
        }
        let todoLocal = JSON.parse(localStorage.getItem('mydata'))
        setList(todoLocal)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    useEffect(() => {
        getLocal()
    },[])
    return(
        <Wrapper>
            <h1>Muhammad's Todo</h1>
            <Flex direction="row" justify="center">
                <TextField 
                    className="input"
                    id="outlined-basic" 
                    label="What's your activity today?" 
                    variant="outlined" 
                    value={value.activity}
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    />
                <Button variant="contained" color="primary" style={{marginLeft: '3em'}} onClick={handleSubmit}>
                    Submit
                </Button>
            </Flex>
                <Flex direction="column" alignItems="center">
                        {list.map((items, i) => (
                            <Flex direction="row" justify="center">
                                <Paper elevation={2} className='card' key={items.id}>
                                    <p>{items.todo}</p>
                                </Paper>
                                <Button variant="contained" color="secondary" className="delete" onClick={() => handleDelete(items.id)}>
                                    Delete
                                </Button>
                            </Flex>
                        ))}
                </Flex>
                {open && (
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Success adding todo
                        </Alert>
                    </Snackbar>
                )}
                
        </Wrapper>
    )
}

export default Home