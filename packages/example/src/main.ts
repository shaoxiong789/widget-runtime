import './style.css'
import { Widget } from 'runtime'

const app = document.querySelector<HTMLDivElement>('#app')!

class Screen extends Widget {
  render() {
    return document.createElement('div')
  }
}

class Text extends Widget {
  render() {
    return document.createElement('div')
  }
}

const DSL = [
  {
    Type: 'Screen',
    children: [
      {
        Type: 'Text',
      },
      {
        Type: 'Text',
      },
      {
        Type: 'Text',
      }
    ]
  }
]

function render(dsl: any[]): Node[] {
  
  return dsl.map((config) => {
    const Type = config.Type;
    return new Type({
      childs: config.children && render(config.children)
    })
  })
}

const elements = render(DSL)

elements.forEach((element) => {
  app.appendChild(element)
})
