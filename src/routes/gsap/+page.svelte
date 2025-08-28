<script>
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const toFunc = (options) => {
    return (element) => {
        gsap.to(element, options)
        return () => gsap.killTweensOf(element)
    }
}

const drag = (options) => {
    return (element) => {
        Draggable.create(element, options)
        return () => gsap.killTweensOf(element)
    }
}


</script>

<div class="container mx-auto">
    <div
            {@attach toFunc({ rotation: 360, duration: 2 })}
            {@attach drag({ type: 'x,y' })}
            class="w-10 h-10 bg-blue-500 rounded"
    >
    </div>
</div>

