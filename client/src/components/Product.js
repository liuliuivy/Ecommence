import React, { Component } from 'react';
import axios from 'axios';
import {
    Form,
    FormGroup,
    Label,
    Input,
    ListGroup,
    ListGroupItem,
    Button,
    Alert
} from 'reactstrap';


class Product extends Component {
    constructor() {
        super();
        this.state = {
            item: null,
            asin: '0123456789',
            isError: false
        };
    }
    change = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        //const itemToShow = this.state.items.find(item =>item.asin === e.target.value)
    }
    click = () => {
        axios.post('/api/items', { asin: this.state.asin })
            .then(res => {
                this.setState({
                    ...this.state,
                    isError: false,
                    item: res.data
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    isError: true,
                    item: null
                });
            })
    }



    render() {
        const { item } = this.state;
        return (

            <div>
                <Form>
                    <FormGroup>
                        <Label style={{ fontWeight: "bold" }}>
                            Product ASIN (e.g. 0123456789)
                        </Label>
                        <Input
                            name="asin"
                            onChange={this.change}
                            value={this.state.asin}
                        />
                        <Button
                            color="primary"
                            size="sm"
                            onClick={this.click}
                        />
                    </FormGroup>
                </Form>
                {this.state.isError
                    ? <Alert color={"danger"}>Error! Please try again</Alert>
                    : item !== undefined && item !== null && <ListGroup>
                        <Label>Product Details:</Label>
                        <ListGroupItem>The rank is {item.rank}</ListGroupItem>
                        <ListGroupItem>The price is {item.price}</ListGroupItem>
                    </ListGroup>
                }

            </div>
        )
    }

}

export default Product;