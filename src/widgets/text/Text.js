import React from 'react'
import { StyleSheet, Text } from 'react-native'

export function Heading1({ style, ...props }) {
  return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({ style, ...props }) {
  return <Text style={[styles.h2, style]} {...props} />
}

export function Heading3({ style, ...props }) {
  return <Text style={[styles.h3, style]} {...props} />
}

export function Paragraph({ style, ...props }) {
  return <Text style={[styles.p, style]} {...props} />
}

export function Tip({ style, ...props }) {
  return <Text style={[styles.tip, style]} {...props} />
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    color: '#333333',
  },
  h2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  h3: {
    fontSize: 14,
    color: '#222222',
  },
  p: {
    fontSize: 13,
    color: '#777777',
  },
  tip: {
    fontSize: 13,
    color: '#999999'
  }
})
