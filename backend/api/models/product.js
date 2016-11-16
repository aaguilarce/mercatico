import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
	published_date: {
        type: Date,
        required: true
    },
	price: {
        type: String,
        required: true
    },
	categories: [{
        type: String,
        required: true
    }],
	state: {
        type: String,
        require: true
    },
	image_path: {
        type: String,
        required: true
    },
	quantity: {
        type: Number,
        required: true
    },
    attributes: [Attribute],
    pricing: Pricing,
    shipping: Shipping
});

export default mongoose.model('Product', productSchema);
