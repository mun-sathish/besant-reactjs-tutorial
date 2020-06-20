import React, { Component } from 'react';
import styles from './stylescss.module.css';
import styled from 'styled-components';
import ParentComp from './ParentComponent';

const H1Tag = styled.a`
    font-size: 10em;
    background-color: blue;

    &:hover {
        background-color: green;
    }
`;

const ButtonTag = styled.button`
    background-color: yellow;
    color: ${props => props.color};
    width: 100%;
    height: 100px;
    font-size: 3em;
`;

const TomatoBtn = styled(ButtonTag)`
    background-color: red;
`;

const ParentCompWrapper = styled(ParentComp)`
    background-color: red;
`;


export default class StylingPart1Comp extends Component {
    render() {
        const content2Style = {
            margin: '10px',
            padding: '5px',
            backgroundColor: 'blue',
            width: '100%'
        }

        return (
            <div>
                <div style={{ color: 'blue' }} >Content 1</div>
                <div style={content2Style} >Content 2</div>
                <div className={styles.content3Style} >Content 3</div>
                <H1Tag>Content 4</H1Tag>
                <ButtonTag color="blue">Button 1</ButtonTag>
                <ButtonTag color="green">Button 2</ButtonTag>
                <TomatoBtn color="white">Button 3</TomatoBtn>
                <ParentCompWrapper>Content 10</ParentCompWrapper>
            </div>
        );
    }
}