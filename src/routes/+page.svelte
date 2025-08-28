<script>
    import { gsap } from 'gsap'

    const rotateMe = () => {
        return (element) => {
            gsap.to(element, {rotation: 360, duration: 2})
            return () => gsap.killTweensOf(element)
        }
    }

</script>

<div class="container mx-auto">
    <div
            {@attach rotateMe()}
            class="w-10 h-10 bg-blue-500 rounded"
    >
    </div>
</div>
