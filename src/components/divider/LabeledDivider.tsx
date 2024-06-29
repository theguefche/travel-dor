
type LabeledDividerProps = {
    label: string
}

const LabeledDivider = ({ label }: LabeledDividerProps) => {
    return (
        <div className="flex transparent-layout-element w-full items-center rounded-full ">
            <div className="flex-1 border-b border-hover-icon"></div>
            <h2 className=" text-center text-xl lg:text-2xl border border-hover-icon rounded-lg font-semibold leading-8 px-8 py-3">{label}</h2>
            <div className="flex-1 border-b border-hover-icon"></div>
        </div>
    )
}

export default LabeledDivider