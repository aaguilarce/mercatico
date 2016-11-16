import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const attributeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Attribute', attributeSchema);
