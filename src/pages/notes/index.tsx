import { ObjectId } from 'mongodb';
import Link from 'next/link';

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

function Index(props: IndexProps) {
    const { notes } = props;

    return (
        <div>
            <h1>My Note List</h1>
            <h2>Click On Note to see it individually</h2>
            {/* MAPPING OVER THE NOTES */}
            {notes.map((t) => (
                <div key={t._id.toString()}>
                    <Link href={`/notes/${t._id}`}>
                        <h3 style={{ cursor: 'pointer' }}>{t.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
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
