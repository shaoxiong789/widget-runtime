import './style.css'
import {  Widget } from 'widget'

const app = document.querySelector<HTMLDivElement>('#app')!

class Screen extends Widget {
  render(h: Function) {
    return <div></div>
  }
}

class Text extends Widget {

  render(h: Function) {
    return <div>HelloWord</div>
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
        Rules: [
          {
              Property: "Text",
              Category: "Data",
              InvariantScript: "\"HelloWord\"",
          }
        ]
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
      Rules: config.Rules,
      Childs: config.children && render(config.children)
    })
  })
}

const elements = render(DSL)

elements.forEach((element) => {
  app.appendChild(element)
})
