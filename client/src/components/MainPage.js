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
    Alert,
    Badge
} from 'reactstrap';

const defaultAsin = "B002QYW8LW";

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            item: null,
            asin: defaultAsin,
            isError: false
        };
    }
    change = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    click = (e) => {
        e.preventDefault();
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
                            {`Product ASIN (e.g. ${defaultAsin}, B01N1OSCOU)`}
                        </Label>
                        <Input
                            name="asin"
                            onChange={this.change}
                            value={this.state.asin}
                        />
                        <Button style={{ marginTop: "10px" }}
                            outline
                            color="primary"
                            size="sm"
                            onClick={this.click}
                        >
                            Search
                        </Button>
                    </FormGroup>
                </Form>
                {this.state.isError
                    ? <Alert color={"danger"}>Sorry! No product found for ASIN input</Alert>
                    : item !== undefined
                    && item !== null
                    && <ListGroup>
                        <Label>Product Details:</Label>
                        <ListGroupItem>The rank is <Badge color="success" pill>{item.rank}</Badge></ListGroupItem>
                        <ListGroupItem>The category is <Badge color="success" pill>{item.category}</Badge></ListGroupItem>
                        <ListGroupItem>The dimensions is <Badge color="success" pill>{item.dimensions}</Badge></ListGroupItem>
                    </ListGroup>
                }
            </div>
        )
    }
}

export default MainPage;