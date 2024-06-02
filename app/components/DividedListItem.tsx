interface Props {
    children: any;
    listKey: string;
    extraStyles?: string;
}

const DividedListItem = ({ children, listKey, extraStyles }: Props) => {
    return (
        <li
            key={listKey}
            className={
                "mx-12 mb-8 relative [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:block [&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:border-b [&:not(:last-child)]:after:border-b-[#b0b0b0] " +
                extraStyles
            }
        >
            {children}
        </li>
    );
};

export default DividedListItem;
