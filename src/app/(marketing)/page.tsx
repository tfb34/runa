import {Manrope} from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin']
})

export default function LandingPage(){
    return <div className={`${manrope.className} bg-surface-base text-white`}>Hello</div>
}