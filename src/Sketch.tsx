import {useEffect, useRef} from 'react';


type Props = {
    sketch: any,
}

const Sketch = ({sketch}: Props): JSX.Element => {
    const sketchRef = useRef(null);

    useEffect(() => {
        const p5 = require("p5");
        let canvas = new p5(sketch, sketchRef.current)
        return () => {
            canvas.remove();
        }
    }, [sketch]);

    return (<div ref={sketchRef}/>)
}

export default Sketch;