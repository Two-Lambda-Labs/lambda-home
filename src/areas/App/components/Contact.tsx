import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
export default () => (
    <div className="contact-con p-4 d-flex flex-column align-items-center">
        <h4 className="text-center pb-4 pt-2 reflect-white">Contact Us</h4>
        <Form className="contact-form">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" />
            </FormGroup>
            <FormGroup>
                <Label for="company">Company</Label>
                <Input type="text" id="company" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" />
            </FormGroup>
            <FormGroup>
                <Label for="comments">Comments</Label>
                <Input type="textarea" id="comments" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </div>
)