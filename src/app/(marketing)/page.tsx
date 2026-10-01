import Container from "@/components/Container";


export default function LandingPage(){
    return (
        <>
        <section>
            <Container>
                <div className="w-full min-h-[calc(100vh-72px)] flex flex-row items-center">
                    <div className="flex-2">
                        <p className=" text-text-accent uppercase text-xs font-semibold tracking-widest mb-2.5">Today's workout</p>
                        <h1 className="text-5xl/tight font-semibold mb-16">Train with Understanding<span className="text-text-accent">.</span><br></br>Move with Intent<span className="text-text-accent">.</span> </h1>
                        <p className="text-md/6 mb-16">The first intelligent workout tracker that seamlessly integrates muscle building, joint<br className="hidden lg:block"></br> mobility, and deep fascia tissue release into one unified gym session.</p>
                        <button className="btn">Build your Workout</button>
                    </div>
                    <div className="flex-1">
                        <div className="h-50 w-50 bg-gray-500">Placeholder Image</div>
                    </div>
                </div>
            </Container>
        </section>
        <section className="min-h-screen">
            <Container>
                <header className="mb-6 text-center">
                    <p className="uppercase text-text-accent text-xs font-semibold tracking-widest mb-2.5">How it works</p>
                    <h2 className="font-semibold text-4xl mb-2">What are you training?</h2>
                    <p className="text-text-secondary text-2xl font-light">A three-phase approach built for physical longevity. </p>
                </header>
                <div className="Card bg-phase-surface-base border border-slate-700 rounded-2xl px-7 py-8 max-w-95">
                    <p className="text-base text-text-secondary font-medium">Phase 1</p>
                    <h3 className="text-2xl font-bold">Prep</h3>
                    <p className="text-base text-text-secondary font-normal">(Fascia Release)</p>

                    <p className="text-lg/7 font-light">Wake up sensory nervous receptors, increase blood flow, and unglue restricted tissue structures using targeted tool or tool-free dynamic friction before you touch a barbell.</p>

                </div>
            
            </Container>
        </section>
        </>
    )
}