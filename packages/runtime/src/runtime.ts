export abstract class Widget{
  constructor(){
    return this.render()
  }

  childrens: Widget[] = []

  appendChild(widget: Widget) {
    this.childrens.push(widget)
  }

  abstract render(): any;
}
