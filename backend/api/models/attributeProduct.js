import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const attributeProductSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    attribute: Attribute
});

export default mongoose.model('AttributeProduct', attributeProductSchema);
