import React from 'react'
import { graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'

import MyComponent from '../components/MyComponent/MyComponent'

// UP HERE .....

const HomePage = ({ path, ...props }) => {
  return (
    <div>
      <MyComponent />
      <InlineComponent />
    </div>
  )
}

// MOVE THIS BLOCK OF CODE UP TO .....
const InlineComponent = () => {
  return (
    <div>
      <Trans ns="common">InlineComponent</Trans>
      <Trans ns="common">InlineComponent #2</Trans>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
