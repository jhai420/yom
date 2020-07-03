import React from 'react';
import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const TextArea = styled.textarea.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

function Contact() {
    return (
    <Wrapper>
        <form action="https://submit-form.com/6RWXc_-g1btj_WSjXEJl1" target="_self">

            <Title>Contact Us</Title>

            <Label>Name: </Label>
            <InputText
                type="text"
                name="name"
            />

            <Label>Email: </Label>
            <InputText
                type="email"
                name="email"
            />

            <Label>Message: </Label>
            <TextArea
                type="text"
                rows="5"
                name="message"
            />
            <Button type="submit" variant="light">Send Message</Button>
        </form>
    </Wrapper>

)

};

export default Contact;