import mongoose, { Model } from 'mongoose';

const databaseUrl = process.env.NEXT_PUBLIC_DB_CONN_STRING;

export const connect = async () => {
    const conn = await mongoose
        .connect(databaseUrl as string)
        .catch((err) => console.log(err));
    console.log('Mongoose Connection Established');

    const NoteSchema = new mongoose.Schema({
        title: String,
        body: String,
        writeDate: Date,
        tags: [String]
    });

    const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema);

    return { conn, Note };
};
