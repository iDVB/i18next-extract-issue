import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const MyComponent = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Trans ns="common">MyComponent Trans</Trans>
    </div>
  )
}

export default MyComponent
