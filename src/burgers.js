import React from 'react'
import styled from 'styled-components'

import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'
import HamburgerThreeDY from 'components/HamburgerThreeDY'
import HamburgerThreeDXY from 'components/HamburgerThreeDXY'
import HamburgerArrow from 'components/HamburgerArrow'
import HamburgerArrowAlt from 'components/HamburgerArrowAlt'
import HamburgerArrowTurn from 'components/HamburgerArrowTurn'
import HamburgerBoring from 'components/HamburgerBoring'

import BurgerContainer from './BurgerContainer'

const Label = styled.div`margin: 15px 0;`

const burgers = [
  {
    burgerComponent: HamburgerThreeDX,
    name: 'ThreeDX',
    buttonColor: '#FFBC67',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerThreeDY,
    name: 'ThreeDY',
    buttonColor: '#DA727E',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerThreeDXY,
    name: 'ThreeDXY',
    buttonColor: '#AC6C82',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerCollapse,
    name: 'Collapse',
    buttonColor: '#685C79',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerArrow,
    name: 'Arrow',
    buttonColor: '#455C7B',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerArrowAlt,
    name: 'ArrowAlt',
    buttonColor: '#FFBC67',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerArrowTurn,
    name: 'ArrowTurn',
    buttonColor: '#DA727E',
    barColor: 'white'
  },
  {
    burgerComponent: HamburgerBoring,
    name: 'Boring',
    buttonColor: '#AC6C82',
    barColor: 'white'
  }
]

const renderBurgerList = parent => {
  return burgers.map(burger => {
    const burgerName = burger.name

    const BurgerComponent = React.createElement(burger.burgerComponent, {
      key: burgerName,
      isActive: parent.state[`isActive${burgerName}`],
      toggleButton: parent[`toggleButton${burgerName}`],
      buttonColor: burger.buttonColor,
      barColor: burger.barColor
    })

    const LabelComponent = React.createElement(
      Label,
      { key: `Hamburger${burgerName}` },
      `Hamburger${burgerName}`
    )

    return React.createElement(BurgerContainer, { key: burgerName }, [
      BurgerComponent,
      LabelComponent
    ])
  })
}

export default renderBurgerList