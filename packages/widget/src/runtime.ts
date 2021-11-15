export interface Rule{
  Property: string;
  Category: string;
  InvariantScript: string;
}

export function createElement(tag: any, attrs?: any, ...children: any[]) {
  console.log('11111')
  
}


export abstract class Widget{
  constructor(Childs: Widget[]){
    this.Childs = Childs
    return this.render(createElement)
  }
  
  Rules: Rule[] = []

  Childs: Widget[] = []

  appendChild(widget: Widget) {
    this.Childs.push(widget)
  }

  abstract render(h: Function): any;
}
