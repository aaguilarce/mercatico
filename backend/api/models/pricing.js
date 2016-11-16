import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const pricingSchema = new Schema({
    list: {
        type: Number,
        required: true
    },
    retail: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Pricing', pricingSchema);
