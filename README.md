# React P5 Component

A tiny react component that allows you to use [P5](https://p5js.org/) inside your react app.

#### Example

[mohfunk.com](https://mohfunk.com)

#### Usage

```bash
> yarn add @mohfunk/react-p5-component
```

###### cube.ts

```ts
import p5 from "p5";

const cube = (p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.frameRate(144);
        p.background(0, 0);

    };
    p.windowResized = () =>
        p.resizeCanvas(p.windowWidth, p.windowHeight)

    p.draw = () => {
        p.background(0, 0);
        p.normalMaterial();
        p.push();
        p.translate(200, 0, 0);
        p.rotateZ(p.frameCount * 0.02);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(80, 40);
        p.pop();
    };
};

export default cube;
```

```tsx
import ReactP5Component from '@mohfunk/react-p5-component'
import cube from './sketch'
const MyApp = () => <ReactP5Component sketch={cube} />;
```

That's it.
