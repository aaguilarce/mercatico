import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const shippingSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Shipping', shippingSchema);
