
type ContainerProps= {
    children: React.ReactNode;
}

export default function Container(props: ContainerProps){
    return (
        <div className="mx-auto w-full max-w-300 px-6">
            {props.children}
        </div>
    )
}