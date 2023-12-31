import PageHero from '@/components/PageHero';
import { useLanguage } from '@/components/utils/LanguageContext';
import { ObjectId } from 'mongodb';
import { DOMAttributes, FormEventHandler, useState } from 'react';

interface Note {
    title: string;
    body: string;
    writeDate: Date;
    tags: string[];
    _id: ObjectId;
}

interface IndexProps {
    notes: Note[];
}

interface TagItem {
    title: string;
    color: string;
    onClick?: DOMAttributes<HTMLParagraphElement>['onClick'];
}

//prettier-ignore
const Tag = ({ title, color, onClick }: TagItem) => {
    return (
        <p onClick={onClick} className={`flex bg-opacity-50 w-fit px-2 py-1 shadow rounded-none text-xs sm:text-sm bg-${color} border-${color === 'white' ? 'lightgray' : color} ${color === 'white' ? 'text-lightgray' : 'text-dark' } border hover:rounded-[16px] hover:text-dark transition-all duration-[250ms] hover:cursor-pointer select-none`}>
            {title}
        </p>
    )
};

const FilterItems = () => {
    var { getText } = useLanguage();

    return (
        <div className="w-full flex flex-col gap-3 transition-all duration-[250ms] border shadow bg-white border-lightgray rounded-[16px] p-6">
            <p className="font-medium text-lg md:text-xl">
                {getText('filters:', 'filtros:')}
            </p>
            <div className="flex flex-col gap-2">
                <p>{getText('title:', 'titulo:')}</p>
                <input
                    className="border border-lightgray rounded-[16px] p-2 text-sm md:text-base"
                    type="text"
                    placeholder={getText('search title', 'buscar titulo')}
                />
            </div>
            <div className="flex flex-col gap-1">
                <p>{getText('tags:', 'etiquetas:')}</p>
                <div className="flex flex-wrap gap-1 justify-start items-start w-full">
                    <Tag title="important" color="red" />
                    <Tag title="to-do" color="blue-500" />
                    <Tag title="school" color="yellow-500" />
                    <Tag title="personal" color="green" />
                    <Tag title="quote" color="purple-500" />
                    <Tag title="unimportant" color="lightgray" />
                </div>
            </div>
        </div>
    );
};

const AddNoteForm = () => {
    var { getText } = useLanguage();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState<string[]>([]); // Change the type of the tags state to string[]
    const [tagColor, setTagColor] = useState('white');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const note = { title, body, tags };

        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });

        if (response.ok) {
            // TODO: display a success message to the user
            window.location.reload();
        } else {
            // The response from the API was an error, handle it appropriately
            console.log('error: ');
            console.log(response);
        }
    };

    const ClickableTag = ({ title, color }: TagItem) => {
        return (
            <Tag
                title={title}
                onClick={() => {
                    setTagColor(tagColor == 'white' ? color : 'white');
                    if (!tags.includes(title)) {
                        setTags([...tags, title]);
                    } else {
                        setTags(tags.filter((tag) => tag !== title));
                    }
                }}
                color={tagColor}
            />
        );
    };

    return (
        <div className="w-full flex flex-col gap-3 transition-all duration-[250ms] border shadow bg-white border-lightgray rounded-[16px] p-6">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <p>{getText('title:', 'título:')}</p>
                    <input
                        type="text"
                        className="border border-lightgray rounded-[16px] p-2 text-sm md:text-base"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder={getText('title', 'titulo')}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>{getText('body:', 'cuerpo:')}</p>
                    <textarea
                        className="border border-lightgray rounded-[16px] p-2 text-sm md:text-base"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                        placeholder={getText('body', 'cuerpo')}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p>{getText('tags:', 'etiquetas:')}</p>
                    <div className="flex flex-col flex-wrap gap-1 justify-start items-start w-full">
                        <ClickableTag title="important" color="red" />
                        {/* <Tag
                            title="to-do"
                            onClick={() => {
                                const title = 'to-do';
                                const color = 'blue-500';
                                setTagColor(
                                    tagColor == 'white' ? color : 'white'
                                );
                                if (!tags.includes(title)) {
                                    setTags([...tags, title]);
                                } else {
                                    setTags(
                                        tags.filter((tag) => tag !== title)
                                    );
                                }
                            }}
                            color={tagColor}
                        /> */}

                        <ClickableTag title="to-do" color="blue-500" />
                        <ClickableTag title="school" color="yellow-500" />
                        <ClickableTag title="personal" color="green" />
                        <ClickableTag title="quote" color="purple-500" />
                        <ClickableTag title="unimportant" color="lightgray" />
                        <Tag
                            title="unimportant"
                            color="lightgray"
                            onClick={() => setTags([...tags, 'unimportant'])}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="flex text-sm sm:text-base justify-center gap-3 transition-all duration-[250ms] hover:scale-[102%] hover:cursor-pointer shadow text-light bg-red rounded-[16px] p-2"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

const NoteDisplay = (note: Note) => {
    const handleDelete = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${note._id}`, {
            method: 'delete'
        });
        window.location.reload();
    };

    return (
        <div
            className="flex flex-col items-center gap-3 transition-all duration-[250ms] border shadow bg-lightlavender border-lavender rounded-[16px] p-6"
            key={note._id.toString()}
        >
            <div className="flex flex-col gap-3 items-start h-full w-full">
                <p
                    className="font-medium text-base sm:text-xl"
                    onClick={() => {
                        console.log(note._id);
                    }}
                >
                    {note.title}
                </p>
                <p className="text-sm sm:text-base">{note.body}</p>
            </div>

            <div className="flex flex-wrap gap-1 justify-start items-start w-full">
                {note.tags.map((tag) => (
                    <p
                        className={`flex bg-opacity-50 w-fit px-2 py-1 shadow rounded-none hover:rounded-[16px] text-xs sm:text-sm transition-all duration-[250ms] hover:cursor-pointer ${
                            tag.includes('unimportant')
                                ? 'bg-lightgray border-lightgray'
                                : tag.includes('important')
                                ? 'bg-red border-red'
                                : tag.includes('to-do')
                                ? 'bg-blue-500 border-blue-500'
                                : tag.includes('school')
                                ? 'bg-yellow-500 border-yellow-500'
                                : tag.includes('personal')
                                ? 'bg-green border-green'
                                : tag.includes('quote')
                                ? 'bg-purple-500 border-purple-500'
                                : ''
                        } border`}
                        key={tag}
                    >
                        {tag}
                    </p>
                ))}
            </div>
            <div className="flex self-end gap-3">
                <button
                    className="flex text-sm sm:text-base items-center gap-3 transition-all duration-[250ms] hover:scale-105 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                    onClick={() => {
                        alert('work in progress!');
                    }}
                >
                    edit
                </button>
                <button
                    className="flex text-sm sm:text-base text-light items-center gap-3 transition-all duration-[250ms] hover:scale-105 hover:cursor-pointer border shadow bg-red border-lightgray rounded-[16px] p-2"
                    onClick={handleDelete}
                >
                    delete
                </button>
            </div>
        </div>
    );
};

function Index(props: IndexProps) {
    var { getText } = useLanguage();
    const { notes } = props;

    return (
        <PageHero title={getText('notebook 📝', 'cuaderno 📝')}>
            {/* MAPPING OVER THE NOTES */}
            <div className="flex flex-col gap-12">
                <div className="flex w-full gap-3">
                    <FilterItems />
                    <AddNoteForm />
                </div>
                <div className="grid max-w-[1800px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {notes.map((note) => NoteDisplay(note))}
                </div>
            </div>
        </PageHero>
    );
}

export async function getServerSideProps() {
    // get note data from API
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
    const notes = await res.json();

    return {
        props: { notes: notes }
    };
}

export default Index;
