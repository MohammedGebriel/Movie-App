import { useEffect } from "react"
// ! import { useEffect } from "react"
// ? import { useEffect } from "react"
// TODO: import { useEffect } from "react"
// * import { useEffect } from "react"
// // import { useEffect } from "react"

export default function BreakingBad() {
    useEffect(() => {
        const get = async () => {
            const response = await fetch("Link of API");
            const data = await response.json();
            console.log(data);
            // TODO:
            // FIXME:
            
        }
        get()
    }, [])

    return (
        <>
            <div className="text-white bt">BreakingBad</div>
            <div></div>
        </>
    )

}
