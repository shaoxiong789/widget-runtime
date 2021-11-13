import './style.css'
import { Widget } from 'runtime'

const app = document.querySelector<HTMLDivElement>('#app')!

class Screen extends Widget {
  render() {
    const div = document.createElement('div')
    div.innerHTML = '121'
    return div
  }
}

class Text extends Widget {
  render() {
    return document.createElement('div')
  }
}

const Widgets: any = {
  "Screen": Screen,
  "Text": Text
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
    const Type = Widgets[config.Type];
    return new Type({
      childs: config.children && render(config.children)
    })
  })
}

const elements = render(DSL)

elements.forEach((element) => {
  app.appendChild(element)
})
