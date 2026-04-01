import { currentSponsors } from "@/lib/sponsorsConstants"

export function CurrentSponsors() {
    return (
        <section className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary mb-4">Sponsors</h2>
            <div className="flex flex-col gap-20 items-center md:grid md:grid-cols-3 md:items-center">
                {currentSponsors.map((sponsor, index) => {
                    return<img key={index} className="w-1/2 flex justify-self-center" src={sponsor.logo} alt={sponsor.alt}></img>
                })}
            </div>
        </section>
    )
}