import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [Item]
});

export default mongoose.model('Store', storeSchema);
