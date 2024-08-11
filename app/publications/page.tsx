import { TitleText } from "../components";
import publications from "./publications.json";
import Publication from "./publication";

const Publications = () => {
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center mx-2"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Links below:
            </p>
            <section className="grid justify-center">
                <ul className="max-w-prose">
                    {publications.map(
                        ({
                            title,
                            url,
                            id,
                            author,
                            journal,
                            volume,
                            number,
                            pages,
                            year,
                            abstract,
                        }) => (
                            <Publication
                                key={id + "_root"}
                                title={title}
                                url={url}
                                id={id}
                                author={author}
                                journal={journal}
                                volume={volume}
                                number={number}
                                pages={pages}
                                year={year}
                                abstract={abstract}
                            />
                        )
                    )}
                </ul>
            </section>
        </>
    );
};

export default Publications;
