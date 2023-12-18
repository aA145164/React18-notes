import ThemeContext from './context/theme-context'

function HomeBanner() {
  return <div>

    <ThemeContext.Consumer>
      {
        value => {
          return <div> HomeBanner:{value.color}-{value.fontSize}</div>
        }
      }
    </ThemeContext.Consumer>
  </div>
}

export default HomeBanner