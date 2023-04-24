import clsx from 'clsx';

type AgendaItemType = {
    agenda: {
        title: string
        time: string
        name?: string
        description?: any
    },
    light?: boolean
}
const AgendaItem = ({agenda, light = false}: AgendaItemType) => {
    return (
        <div
            className={clsx([
                'flex flex-wrap border-t md:flex-nowrap',
                light ? 'hover:bg-gray-900/10' : 'hover:bg-gray-500/50'
            ])}
        >
            <div className="md:w-52 flex-shrink-0 flex flex-col pt-4 md:py-8 md:border-r mx-6 md:ml-8 md:mr-8 my-4">
                <span className="font-semibold title-font text-primary">{agenda?.title}</span>
                <span
                    className={clsx([
                        'mt-1 font-semibold text-sm',
                        light ? 'text-color' : 'text-gray-100'
                    ])}
                >
                    {agenda?.time}
                </span>
            </div>
            <div className="md:flex-grow pb-8 mx-6 md:ml-8 md:ml-0 md:py-8 my-4">
                {agenda?.name && (
                    <h2
                        className={clsx([
                            'text-xl font-bold title-font mb-2',
                            light ? 'text-color/80' : 'text-white/80'
                        ])}
                    >
                        {agenda?.name}
                    </h2>
                )}
                <div className="leading-relaxed md:ml-4">
                    {agenda?.description()}
                </div>
            </div>
        </div>
    );
};

export default AgendaItem;