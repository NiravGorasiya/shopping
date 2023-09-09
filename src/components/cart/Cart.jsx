import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Trash } from 'react-bootstrap-icons'

const Cart = () => {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>image</th>
                        <th>product name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>total</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/u/2/1/l-jk173-jai-kurties-original-imageugcbqk36gvg.jpeg?q=70" /></td>
                        <td>This is a product title</td>
                        <td><input type="number" /></td>
                        <td>104</td>
                        <td>104</td>
                        <td><Trash color='blue' /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/u/2/1/l-jk173-jai-kurties-original-imageugcbqk36gvg.jpeg?q=70" /></td>
                        <td>This is a product title</td>
                        <td><input type="number" /></td>
                        <td>104</td>
                        <td>104</td>
                        <td><Trash color='blue' /></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Cart