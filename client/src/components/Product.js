import React, { Component } from 'react';
import axios from 'axios';
import {
    Form,
    FormGroup,
    Label,
    Input,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';


class Product extends Component {

    state = {
        item: null,
        asin: ''
    };
    change = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        //const itemToShow = this.state.items.find(item =>item.asin === e.target.value)
    }
    click=() =>{
        axios.post('/api/items', {asin:this.state.asin})
            .then(res =>{
            console.log(res.data);
            this.setState({
                ...this.state,
                item:res.data
            })
            })
    }
    


    render() {
        const { item } = this.state;
        return (
           
            <div>
                <Form>
                    <FormGroup>
                        <Label style={{ fontWeight: "bold" }}>Product ASIN </Label>
                        <Input
                            name="asin"
                            onChange={this.change} />
                        <Button 
                         color="primary"
                         size="sm"
                         onClick={this.click} />
                    </FormGroup>
                </Form>
                {item !== undefined && item !==null && <ListGroup>
                    <h3>Product Details:</h3>
                    <ListGroupItem>The rank is :{item.rank}</ListGroupItem>
                    <ListGroupItem>The price is {item.price} </ListGroupItem>
                </ListGroup>}

            </div>
        )
    }

}

export default Product;