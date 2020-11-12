import React from 'react'
import { Container } from './style'
import List from '../List'
import { Component } from './style'

export default function Board() {
    return (
        <Container>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
        </Container>
    )
}