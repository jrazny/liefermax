import mongoose from "mongoose";

const ProduktSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    beschreibung: {
        type: String,
        required: true,
        maxlength: 250
    },
    kategorie: {
        type: String,
        required: true,
        maxlength: 30
    },
    preis: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    extras: {
        type: [
            {
                text: {
                    type: String,
                    required: true
                },
                preis: {
                    type: Number,
                    required: true
                },
            }
        ]
    },
},
//{timestamps: true}
)

export default mongoose.models.Produkt || mongoose.model("Produkt", ProduktSchema)