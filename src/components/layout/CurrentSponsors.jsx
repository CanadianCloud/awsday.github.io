import { currentSponsors } from "@/lib/sponsorsConstants"
import Image from "next/image"

export function CurrentSponsors() {
    return (
        <section className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary mb-4">Sponsors</h2>
            <div className="flex flex-col gap-20 md:grid md:grid-cols-3 md:items-center">
                {currentSponsors.map((sponsor, index) => {
                    return <figure className="flex flex-col items-center" key={index}>
                        <img className="w-3/4" src={sponsor.logo} alt={sponsor.alt}></img>
                        <figcaption className="text-gray-600 text-xl">{sponsor.name}</figcaption>
                    </figure>
                })}
            </div>
        </section>
    )
}