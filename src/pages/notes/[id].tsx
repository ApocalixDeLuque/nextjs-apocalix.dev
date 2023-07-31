import { ObjectId } from 'mongodb';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Note {
    title: string;
    body: string;
    writeDate: Date;
    tags: string[];
    _id: ObjectId;
}

interface ShowProps {
    note: Note;
    url: string;
}

function Show(props: ShowProps) {
    const router = useRouter();
    const [note, setNote] = useState<Note>(props.note);

    const handleDelete = async () => {
        await fetch(props.url + '/' + note._id, {
            method: 'delete'
        });
        //push user back to main page after deleting
        router.push('/notes');
    };

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
            <button onClick={handleDelete}>Delete</button>
            <button
                onClick={() => {
                    router.push('/notes');
                }}
            >
                Go Back
            </button>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    // fetch the note, the param was received via context.query.id
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/' + context.query.id
    );
    const note = await res.json();

    //return to serverSideProps the note and the url from out env variables for frontend api calls
    return { props: { note, url: process.env.NEXT_PUBLIC_API_URL } };
}

export default Show;
