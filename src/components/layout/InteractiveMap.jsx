"use client"

export default function InteractiveMap({ onStageSelect, selectedStage }) {
    const stageButtons = [
        { id: 2, name: "2nd Stage", position: "top-[60%] left-[30%]" },
        { id: 3, name: "Workshop Room", position: "top-[20%] right-[25%]" },
        { id: 4, name: "Breakout Room 1", position: "top-[45%] right-[25%]" },
        { id: 5, name: "Breakout Room 2", position: "top-[70%] right-[25%]" }
    ]

    return (
        <div className='w-full h-full flex flex-col items-center py-7'>
            {/* Map Container - Desktop only interactive */}
            <div className="relative w-full md:w-1/2">
                <img src='/event-map/floor-1.png' alt='Venue Map' className='w-full h-full'/>

                {/* Interactive buttons - Desktop only */}
                <div className="hidden md:block">
                    {stageButtons.map((stage) => (
                        <button
                            key={stage.id}
                            onClick={() => onStageSelect(stage.id === selectedStage ? null : stage.id)}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-lg font-semibold text-sm transition-all shadow-lg hover:scale-110 ${
                                stage.id === selectedStage
                                    ? 'bg-[#FF9900] text-white ring-4 ring-[#FF9900] ring-opacity-50'
                                    : 'bg-white text-[#333E48] hover:bg-[#FF9900] hover:text-white'
                            }`}
                            style={{
                                top: stage.position.split(' ')[0].replace('top-[', '').replace(']', ''),
                                left: stage.position.includes('left')
                                    ? stage.position.split(' ')[1].replace('left-[', '').replace(']', '')
                                    : 'auto',
                                right: stage.position.includes('right')
                                    ? stage.position.split(' ')[1].replace('right-[', '').replace(']', '')
                                    : 'auto'
                            }}
                        >
                            {stage.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Stage Indicator - Desktop only */}
            {selectedStage && (
                <div className="hidden md:block mt-4 text-center">
                    <p className="text-lg text-gray-600">
                        Showing schedule for: <span className="font-bold text-[#FF9900]">
                            {stageButtons.find(s => s.id === selectedStage)?.name}
                        </span>
                        <button
                            onClick={() => onStageSelect(null)}
                            className="ml-4 text-sm text-blue-600 hover:underline"
                        >
                            Show all stages
                        </button>
                    </p>
                </div>
            )}
        </div>
    )
}
