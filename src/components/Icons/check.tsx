import * as React from "react"
import { SVGProps, memo } from "react"
const CheckComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props}>
        <path
            fill="#c7ede6"
            d="M87.2 56.7c1.1-2.2 1.8-4.6 1.8-7.2 0-6.6-4.2-12.3-10-14.5 0-11.6-9.4-21-21-21-9.8 0-18 6.7-20.3 15.8-1.5-.5-3-.8-4.7-.8-7.7 0-14 5.8-14.9 13.3C12.9 43.4 9 48 9 53.5 9 59.9 14.1 65 20.5 65h.5v.5C21 76.8 30.2 86 41.5 86c6.4 0 12.2-3 15.9-7.6 2.2 2.2 5.2 3.6 8.6 3.6 4.7 0 8.7-2.7 10.7-6.5 1.1.3 2.2.5 3.3.5 6.1 0 11-4.9 11-11 0-3.3-1.5-6.3-3.8-8.3z"
        />
        <path
            fill="#fdfcef"
            d="M79.9 64.5H86c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.2-4.1-4.5 0-.2.1-.4.1-.5 0-2.5-2-4.5-4.5-4.5-1.4 0-2.7.7-3.5 1.7-.1-2.6-2.3-4.7-5-4.7-2.8 0-5 2.2-5 5 0 .4.1.9.2 1.3-.7-.8-1.6-1.3-2.7-1.3-1.8 0-3.2 1.3-3.5 3.1-.2 0-.4-.1-.5-.1-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h14.9v.5h3v-.5z"
        />
        <path
            fill="#472b29"
            d="M73.5 47c-3 0-5.5 2.5-5.5 5.5-.6-.4-1.3-.5-2-.5-1.8 0-3.4 1.3-3.9 3H62c-2.8 0-5 2.2-5 5s2.2 5 5 5h14.9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H62c-2.2 0-4-1.8-4-4s1.8-4 4-4h.5c.2 0 .5-.2.5-.4.2-1.5 1.5-2.6 3-2.6.9 0 1.7.4 2.3 1.1.1.1.2.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.3.3-.6-.1-.4-.2-.8-.2-1.2 0-2.5 2-4.5 4.5-4.5 2.4 0 4.3 1.9 4.5 4.3 0 .2.2.4.3.5h.2c.2 0 .3-.1.4-.2.8-1 1.9-1.5 3.1-1.5 2.2 0 4 1.8 4 4v.4c0 .1 0 .3.1.4s.2.2.3.2c2.1.2 3.6 1.9 3.6 4 0 2.2-1.8 4-4 4h-6.1c-.3 0-.5.2-.5.5s.2.5.5.5H86c2.8 0 5-2.2 5-5 0-2.4-1.7-4.4-4-4.9V55c0-2.8-2.2-5-5-5-1.2 0-2.3.4-3.2 1.2-.6-2.4-2.7-4.2-5.3-4.2z"
        />
        <path
            fill="#472b29"
            d="M72 54c-1.4 0-2.6 1-2.9 2.3-.4-.2-.8-.3-1.2-.3-1.2 0-2.2.9-2.4 2.1-.2 0-.4-.1-.6-.1-1.5 0-2.8 1.2-2.9 2.7 0 .1.1.3.2.3s.2-.1.2-.2c.1-1.3 1.2-2.3 2.4-2.3.2 0 .5 0 .7.1h.1c.1 0 .1 0 .2-.1.1 0 .1-.1.1-.2 0-1 .8-1.9 1.9-1.9.4 0 .9.2 1.2.5 0 0 .1.1.2.1h.1c.1 0 .1-.1.2-.2.1-1.3 1.2-2.3 2.5-2.3.2 0 .4 0 .7.1h.1c.1 0 .2-.1.2-.2s0-.3-.2-.3c-.3-.1-.5-.1-.8-.1zm13.9 1.5c-1.3 0-2.5.9-2.9 2.2 0 .1 0 .3.2.3h.1c.1 0 .2-.1.2-.2.3-1.1 1.3-1.8 2.4-1.8h.3c.1 0 .2-.1.2-.2s-.1-.3-.2-.3h-.3z"
        />
        <path
            fill="#fff"
            d="M15.4 51H5.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9.9c.3 0 .5.2.5.5s-.2.5-.5.5zm3.1 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm5 2h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5zm-11 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 0h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm6 2h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm3-9h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 2h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm5 2h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM67.5 22h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5s-.2.5-.5.5zm4 0h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm5 2h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5s-.2.5-.5.5zm-12 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm-3.1 0h-1.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.9c.3 0 .5.2.5.5s-.2.5-.5.5zm9.1-4h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm-3 6h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5z"
        />
        <path
            fill="#472b29"
            d="M31.4 69h-.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h.9c.3 0 .5.2.5.5s-.2.5-.5.5z"
        />
        <path
            fill="#a1d3a2"
            d="M72.4 44.3v19.5c0 4.1-3.4 7.5-7.5 7.5H37.1c-4.1 0-7.5-3.4-7.5-7.5V36.2c0-4.1 3.4-7.5 7.5-7.5h27.8c3.4 0 6.3 2.3 7.2 5.5"
        />
        <path
            fill="#472b29"
            d="M64.9 72H37.1c-4.5 0-8.2-3.7-8.2-8.2V36.2c0-4.5 3.7-8.2 8.2-8.2h27.8c3.7 0 6.9 2.5 7.9 6 .1.4-.1.8-.5.9-.4.1-.8-.1-.9-.5-.8-2.9-3.5-5-6.5-5H37.1c-3.7 0-6.8 3-6.8 6.8v27.5c0 3.7 3 6.8 6.8 6.8h27.8c3.7 0 6.8-3 6.8-6.8V44.3c0-.4.3-.7.7-.7s.7.3.7.7v19.5c0 4.5-3.7 8.2-8.2 8.2z"
        />
        <path
            fill="#472b29"
            d="M68.5 58.9c-.3 0-.5-.2-.5-.5v-3.7c0-.3.2-.5.5-.5s.5.2.5.5v3.7c0 .3-.2.5-.5.5zM68.5 52.4c-.3 0-.5-.2-.5-.5V50c0-.3.2-.5.5-.5s.5.2.5.5v1.9c0 .3-.2.5-.5.5z"
        />
        <path
            fill="#472b29"
            d="M64.2 67.9H37.8c-2.6 0-4.8-2.1-4.8-4.7V36.7c0-2.6 2.1-4.7 4.8-4.7h24c.3 0 .5.2.5.5s-.3.5-.5.5h-24c-2.1 0-3.8 1.7-3.8 3.7v26.4c0 2.1 1.7 3.7 3.8 3.7h26.5c2.1 0 3.8-1.7 3.8-3.7v-2.2c0-.3.2-.5.5-.5s.5.2.5.5v2.2c-.1 2.7-2.2 4.8-4.9 4.8z"
        />
        <path
            fill="#00ac9c"
            d="M50.8 61.5h-.2c-.4 0-.7-.1-1-.4l-7.9-7.7c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1-.4s.7.1 1 .4l6.8 7 22.8-21.8c.3-.3.6-.4 1-.4s.7.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1L51.9 61.1c-.1.1-.2.2-.4.3 0 0-.1 0-.1.1-.1 0-.2 0-.3.1-.1-.1-.2-.1-.3-.1z"
        />
        <path
            fill="#472b29"
            d="M74.2 36.6c.2 0 .5.1.7.3.4.4.4.9 0 1.3L51.5 60.7c-.1.1-.2.1-.2.2h-.7c-.2 0-.5-.1-.6-.3L42 53c-.4-.4-.4-.9 0-1.3.2-.2.4-.3.7-.3s.5.1.7.3l7.1 7.3 23.1-22.2c.2-.1.4-.2.6-.2m0-1c-.5 0-1 .2-1.4.6L50.5 57.6 44.1 51c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.4-.6.8-.6 1.4 0 .5.2 1 .6 1.4l7.9 7.7c.4.3.8.5 1.3.5H51.1c.1 0 .2 0 .3-.1.1 0 .2-.1.2-.1.2-.1.4-.2.5-.4l23.4-22.6c.4-.4.6-.8.6-1.4s-.2-1-.6-1.4c-.3-.2-.7-.4-1.3-.4z"
        />
        <path
            fill="#fdfcef"
            d="M37.5 76.5H41c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.3-3.2-3.1-3.5 0-.2.1-.4.1-.5 0-1.9-1.6-3.5-3.5-3.5-1 0-2 .5-2.6 1.2-.4-1.8-2-3.2-3.9-3.2-2.2 0-4 1.8-4 4 0 .2 0 .4.1.6-.4-.3-1-.6-1.6-.6-1.2 0-2.2.9-2.5 2.1-.2 0-.4-.1-.5-.1-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h7.5v.5h7v-.5z"
        />
        <path
            fill="#472b29"
            d="M39.3 72c-.1 0-.3-.1-.3-.3 0-1.2 1-2.2 2.2-2.2 0 0 .7 0 1.2.1.1 0 .2.2.2.3 0 .1-.2.2-.3.2-.4-.1-1.1-.1-1.1-.1-.9 0-1.7.8-1.7 1.7 0 .2-.1.3-.2.3zm-6.8 4a.5.5 0 1 0 0 1 .5.5 0 1 0 0-1z"
        />
        <path
            fill="#472b29"
            d="M41 77h-3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H41c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.6-3-.1 0-.3-.1-.3-.2s-.1-.2-.1-.4v-.5c0-1.7-1.3-3-3-3-.8 0-1.6.4-2.2 1-.1.1-.3.2-.5.1-.2 0-.3-.2-.4-.4-.3-1.6-1.8-2.8-3.4-2.8-1.9 0-3.5 1.6-3.5 3.5v.4c0 .2-.1.4-.2.5s-.4.1-.6 0c-.3 0-.8-.2-1.2-.2-1 0-1.8.7-2 1.6 0 .3-.3.4-.6.4h-.5c-1.7 0-3 1.3-3 3s1.3 3 3 3h7.5c.3 0 .5.2.5.5s-.1.5-.4.5H23c-2.2 0-4-1.8-4-4s1.8-4 4-4h.2c.4-1.2 1.5-2 2.8-2 .3 0 .7.1 1 .2.2-2.3 2.1-4.2 4.5-4.2 1.8 0 3.5 1.1 4.2 2.8.7-.5 1.5-.8 2.3-.8 2.2 0 4 1.8 4 4v.1c1.7.4 3 2 3 3.9 0 2.2-1.8 4-4 4z"
        />
        <path
            fill="#472b29"
            d="M35.5 76h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
        />
    </svg>
)
export const Check = memo(CheckComponent)

